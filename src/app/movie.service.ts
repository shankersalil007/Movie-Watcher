import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable, OnInit, EventEmitter } from '@angular/core';
import { map, catchError, throwError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MovieService implements OnInit {
  movies = [
    {
      id: 1,
      name: 'MIB',
      year: '2010',
      category: 'Drama',
      isFavorite: true,
    },
    {
      id: 2,
      name: 'Avengers',
      year: '2020',
      category: 'Super Hero',
      isFavorite: false,
    },
    {
      id: 3,
      name: 'Mr Bean',
      year: '2012',
      category: 'Comedy',
      isFavorite: true,
    },
    {
      id: 4,
      name: 'Herby',
      year: '2004',
      category: 'Comedy',
      isFavorite: false,
    },
    {
      id: 5,
      name: 'Ben Ten',
      year: '2013',
      category: 'Cartoon',
      isFavorite: true,
    },
  ];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  moviesChanged = new EventEmitter<Observable<MediaItem[]>>();

  moviesFiltered = new EventEmitter<string>();

  get() {
    const result = this.http.get<MediaItemResponse>('mediaitems').pipe(
      map((resp) => {
        return resp.mediaItems;
      }),
      catchError(this.handleError)
    );
    // return this.movies;
    return result;
  }

  private handleError(error: HttpErrorResponse) {
    console.log(error.message);
    const err = new Error('A data error occurred, please try again.');
    return throwError(() => err);
  }

  // deleteMovie(ourmovie) {
  //   const index = this.movies.indexOf(ourmovie);
  //   this.movies.splice(index, 1);
  // }

  deleteMovie(ourmovie) {
    console.log('inside service: deleting  ' + ourmovie);
    return this.http.delete(`mediaitems/${ourmovie.id}`).pipe(
      map(() => {
        this.moviesChanged.emit(this.get());
      }),
      catchError(this.handleError)
    );
  }

  // addMovie(movie) {
  //   this.movies.push(movie);
  // }

  addMovie(movie) {
    return this.http
      .post('mediaitems', movie)
      .pipe(catchError(this.handleError));
  }
}

interface MediaItem {
  id: number;
  name: string;
  medium: string;
  category: string;
  year: number;
  watchedOn: number;
  isFavorite: boolean;
}

interface MediaItemResponse {
  mediaItems: MediaItem[];
}
