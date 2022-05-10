import { Component, Inject, OnInit } from '@angular/core';
import { MovieService } from './movie.service';
import { catogoryToken } from './providers';
import { ActivatedRoute } from '@angular/router';

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

  movies;

  ngOnInit() {
    this.setMovies('');

    this.activatedRout.paramMap.subscribe((paramMap) => {
      let cat = paramMap.get('category');
      if (cat === 'All') {
        cat = '';
      }
      this.setMovies(cat);
    });
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
