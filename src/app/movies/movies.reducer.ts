import { Action } from '@ngrx/store';
import { MoviesActions, MoviesActionTypes, Pagination } from './movies.actions';
import { Movie } from './models/movie';
import { HttpErrorResponse } from '@angular/common/http';

export interface State {
  isLoading: boolean;
  error: HttpErrorResponse | null;
  data: Movie[] | null;
  // next: string | null;
  // previous: string | null;
  
}

export const initialState: State = {
  isLoading: false,
  error: null,
  data: [],
  // next: null,
  // previous: null,

};

export function reducer(state = initialState, action: MoviesActions): State {
  switch (action.type) {

    case MoviesActionTypes.FetchMovies:
      return {
        ...state,
        isLoading: true,
        error: null
      };

    case MoviesActionTypes.FetchMoviesSuccess:
      return {
        ...state,
        isLoading: false,
        data: action.payload,
        // next: action.payload.next,
        // previous: action.payload.previous
      };

    case MoviesActionTypes.FetchMoviesError:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };

    case MoviesActionTypes.FetchMoviesError:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };

    // case MoviesActionTypes.ChangePage:
    //   return {
    //     ...state,
    //     page: action.payload === Pagination.NEXT ? ++state.page : --state.page
    //   };

    default:
      return state;
  }
}
