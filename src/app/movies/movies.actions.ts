import { Action } from '@ngrx/store';
import { Movie, MoviesResponse } from './models/movie';
import { HttpErrorResponse } from '@angular/common/http';

export const enum MoviesActionTypes {
  FetchMovies = '[Movies] Fetch Movies',
  FetchMoviesSuccess = '[Movies] Load Movies Success',
  FetchMoviesError = '[Movies] Load Movies Error',
  ChangePage = '[Movies] Change page'
}

export const enum Pagination {
  NEXT,
  PREV
}

export class FetchMovies implements Action {
  readonly type = MoviesActionTypes.FetchMovies;
}

export class FetchMoviesSuccess implements Action {
  readonly type = MoviesActionTypes.FetchMoviesSuccess;

  constructor(public payload: Movie[]) {}
}

export class FetchMoviesError implements Action {
  readonly type = MoviesActionTypes.FetchMoviesError;

  constructor(public payload: HttpErrorResponse) {}
}

export class ChangePage implements Action {
  readonly type = MoviesActionTypes.ChangePage;

  constructor(public payload: Pagination) {}
}

export type MoviesActions = FetchMovies | FetchMoviesSuccess | FetchMoviesError | ChangePage;
