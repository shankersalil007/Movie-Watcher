import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { flattenDiagnosticMessageText } from 'typescript';
import { MovieService } from '../movie.service';
import { catogoryToken } from '../providers';

@Component({
  selector: 'rev-mov-list',
  templateUrl: 'mov-list.component.html',
  styleUrls: ['mov-list.component.css'],
})
export class MovListComponent implements OnInit {
  constructor(
    private movieService: MovieService,
    @Inject(catogoryToken) public catogs,
    private activatedRout: ActivatedRoute
  ) {}

  isFiltered = false;

  movies: {
    id: number;
    name: string;
    medium: string;
    category: string;
    year: number;
    watchedOn: number;
    isFavorite: boolean;
  }[];

  filteredMovies: {
    id: number;
    name: string;
    medium: string;
    category: string;
    year: number;
    watchedOn: number;
    isFavorite: boolean;
  }[];

  ngOnInit() {
    this.setMovies('');

    let cat;

    this.activatedRout.paramMap.subscribe((paramMap) => {
      cat = paramMap.get('category');
      if (cat === 'All') {
        cat = '';
      }
      this.setMovies(cat);
    });

    this.movieService.moviesChanged.subscribe((resp) => {
      resp.subscribe((movieItem) => {
        this.setMovies(cat);
      });
    });

    this.movieService.moviesFiltered.subscribe((resp) => {
      this.filterMovies(resp);
    });
  }

  filterMovies(pattern: string) {
    if (pattern.length == 0) {
      this.isFiltered = false;
    } else {
      this.filteredMovies = this.movies.filter((m) => {
        return m.name.startsWith(pattern);
      });
      this.isFiltered = true;
    }

    // return this.filterMovies;
  }

  setMovies(category) {
    if (category === '') {
      this.movieService.get().subscribe((movieItem) => {
        this.movies = movieItem;
      });
    } else {
      this.movieService.get().subscribe((movieItem) => {
        this.movies = movieItem;
      });
      this.movies = this.movies.filter((m) => m.category === category);
    }
  }

  onMovieDelete(value) {
    const links = document.querySelectorAll('a.nav-link');
    const current = Array.from(links).find((elem) =>
      elem.classList.contains('active')
    );
    console.log(current.id);
    console.log('current ', current);
    this.movieService.deleteMovie(value).subscribe(() => {
      if (current.id === 'All') {
        this.setMovies('');
      } else {
        this.setMovies(current.id);
      }
    });
  }

  onClickLink(val) {
    const links = document.querySelectorAll('a.nav-link');
    links.forEach((link) => {
      link.classList.remove('active');
    });
    const elem = document.querySelector(`#${val}`);
    elem.classList.add('active');
    if (val === 'All') {
      this.setMovies('');
    } else {
      this.setMovies(val);
    }
  }
}
