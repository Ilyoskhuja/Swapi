import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
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
  FetchMovieCharactersError,
  FetchMovieError,
  FetchMovieSuccess,
  FetchCharacterError,
  FetchCharacterSuccess,
  FetchCharacterMoviesSuccess,
  FetchCharacterMoviesError
} from './movies.actions';
import { Observable, of } from 'rxjs';
import { map, switchMap, catchError, withLatestFrom } from 'rxjs/operators';
import { CharactersService } from '../characters/characters.service';
import { Movie } from './models/movie';

@Injectable()
export class MoviesEffects {

  fetch$ = createEffect(() => {
    return this.actions$
      .pipe(
        ofType(MoviesActionTypes.FetchMovies),
        withLatestFrom(this.store),
        switchMap(([action, state]) =>
          this.service.getMovies().pipe(
            map(data => new FetchMoviesSuccess(data)),
            catchError(err => of(new FetchMoviesError(err)))
          )
        )
      )
  });
  fetchCharacters$ = createEffect(() => {
    return this.actions$
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
          )
        ))
  });

  fetchCharacterMovies$ =  createEffect(() => {
    return this.actions$
      .pipe(
        ofType(MoviesActionTypes.FetchCharacterMovies),
        withLatestFrom(this.store),
        switchMap(([action, state]) =>

          this.service.getFilmsByCharacter(this.service.selectedCharacter).pipe(
            catchError(err => of(new FetchCharacterMoviesError(err))),
            map(data =>

              new FetchCharacterMoviesSuccess(data)
              // (characters: Movie['charactersData']) => {
              // console.log("characters:", characters);
              // // this.movieService.selectedFilm.charactersData=[];
              // console.log("this.movieService.selectedFilm.charactersData:", this.movieService.selectedFilm.charactersData);


              // //  this.movieService.selectedFilm.charactersData = characters;
              // return true;
              // }
            )
          )
        ))
  });

  fetchMovie$ = createEffect(() => {
    return this.actions$
      .pipe(
        ofType(MoviesActionTypes.FetchMovie),
        withLatestFrom(this.store),
        switchMap(([action, state]) =>
          this.service.getFilm(this.service.selectedFilm.id).pipe(
            catchError(err => of(new FetchMovieError(err))),
            map(data =>

              new FetchMovieSuccess(data)
              // (characters: Movie['charactersData']) => {
              // console.log("characters:", characters);
              // // this.movieService.selectedFilm.charactersData=[];
              // console.log("this.movieService.selectedFilm.charactersData:", this.movieService.selectedFilm.charactersData);


              // //  this.movieService.selectedFilm.charactersData = characters;
              // return true;
              // }
            )
          )
        ))
  });
  // this.service.getMovies().pipe(
  //   map(data =>
  //     new FetchMovieCharactersSuccess(data)
  //   ),
  //   catchError(err => of(new FetchMovieCharactersError(err)))
  // )
  //   )
  // );
  fetchCharacter$ = createEffect(() => {
    return this.actions$
      .pipe(
        ofType(MoviesActionTypes.FetchCharacter),
        withLatestFrom(this.store),
        switchMap(([action, state]) =>
          this.charactersService.getCharacter(this.service.selectedCharacter.id).pipe(
            catchError(err => of(new FetchCharacterError(err))),
            map(data =>

              new FetchCharacterSuccess(data)
            )
          )
        ))
  });
  paginate$ = createEffect(() => {
    return this.actions$
      .pipe(
        ofType(MoviesActionTypes.ChangePage),
        map(() => new FetchMovies())
      )
  });

  constructor(private actions$: Actions,
    private store: Store<State>,
    private service: MovieService,
    private charactersService: CharactersService) { }
}
