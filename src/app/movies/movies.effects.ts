import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
// import { getCurrentPage } from '../reducers/index';
import { State } from './movies.reducer';
import { MovieService } from './movie.service';
import {
  MoviesActionTypes,
  MoviesActions,
  FetchMovies,
  FetchMoviesSuccess,
  FetchMoviesError
} from './movies.actions';
import { Observable, of } from 'rxjs';
import { map, switchMap, catchError, withLatestFrom } from 'rxjs/operators';

@Injectable()
export class MoviesEffects {
  @Effect()
  fetch$: Observable<MoviesActions> = this.actions$
    .pipe(
      ofType(MoviesActionTypes.FetchMovies),
      withLatestFrom(this.store),
      switchMap(([action, state]) =>
        this.service.getMovies().pipe(
          map(data => new FetchMoviesSuccess(data)),
          catchError(err => of(new FetchMoviesError(err)))
        )
      )
    );

  @Effect()
  paginate$: Observable<MoviesActions> = this.actions$
    .pipe(
      ofType(MoviesActionTypes.ChangePage),
      map(() => new FetchMovies())
    );

  constructor(private actions$: Actions,
              private store: Store<State>,
              private service: MovieService) {}
}
