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
  FetchMoviesError,
  FetchMovieCharactersSuccess,
  FetchMovieCharactersError
} from './movies.actions';
import { Observable, of } from 'rxjs';
import { map, switchMap, catchError, withLatestFrom } from 'rxjs/operators';
import { CharactersService } from '../characters/characters.service';
import { Movie } from './models/movie';

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
  fetchMovie$: Observable<MoviesActions> = this.actions$
    .pipe(
      ofType(MoviesActionTypes.FetchMovieCharacters),
      withLatestFrom(this.store),
      switchMap(([action, state]) =>
        this.charactersService.getCharactersByFilm(this.service.selectedFilm).pipe(
          catchError(err => of(new FetchMovieCharactersError(err))),
          map(data =>
            new FetchMovieCharactersSuccess(data)
            // (characters: Movie['charactersData']) => {
            // console.log("characters:", characters);
            // // this.movieService.selectedFilm.charactersData=[];
            // console.log("this.movieService.selectedFilm.charactersData:", this.movieService.selectedFilm.charactersData);


            // //  this.movieService.selectedFilm.charactersData = characters;
            // return true;
            // }
          )
        )));
        // this.service.getMovies().pipe(
        //   map(data =>
        //     new FetchMovieCharactersSuccess(data)
        //   ),
        //   catchError(err => of(new FetchMovieCharactersError(err)))
        // )
    //   )
    // );
  @Effect()
  paginate$: Observable<MoviesActions> = this.actions$
    .pipe(
      ofType(MoviesActionTypes.ChangePage),
      map(() => new FetchMovies())
    );

  constructor(private actions$: Actions,
              private store: Store<State>,
    private service: MovieService,
    private charactersService: CharactersService) { }
}
