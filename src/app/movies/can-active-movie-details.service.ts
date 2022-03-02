import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable, of} from 'rxjs';
import {catchError, map, mergeMap} from 'rxjs/operators';
import { CharactersService} from '../characters/characters.service';
import { Character } from '../characters/models/character';
import { Movie } from './models/movie';
import { MovieService } from './movie.service';

@Injectable({
  providedIn: 'root'
})
export class CanActivateMovieDetailsService implements CanActivate {
  constructor(private movieService: MovieService,
              private charactersService: CharactersService,
              private router: Router) {
                console.log("ActivateMovieDetailsService:");
                
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    return this.movieService.selectedFilm && this.movieService.selectedFilm.id === parseInt(route.params.movieId, 10)
      ? this.getCharactersForSelecterFilm()
      : this.movieService.getFilm(route.params.movieId).pipe(
        catchError(error => {
          console.log("getCharactersForSelecterFilm catchError 1");
          this.router.navigate(['/movies']);
          return of(false);
        }),
        mergeMap((selectedFilm: Movie) => {
          console.log("getCharactersForSelecterFilm!!!!!");
          if (selectedFilm) {
            this.movieService.selectedFilm = selectedFilm;
            console.log("this.getCharactersForSelecterFilm():",this.getCharactersForSelecterFilm());
            
            return this.getCharactersForSelecterFilm();
          } else {
            this.router.navigate(['/movies']);
            return of(false);
          }
        }));
  }

  getCharactersForSelecterFilm(): Observable<boolean> {
    return !!this.movieService.selectedFilm.charactersData
      ? of(true)
      : this.charactersService.getCharactersByFilm(this.movieService.selectedFilm).pipe(
        catchError(error => {
          this.router.navigate(['/movies']);
          return of(false);
        }),
        map((characters: Character[]) => {
           console.log("characters:",characters);
           this.movieService.selectedFilm.charactersData=[];
           console.log("this.movieService.selectedFilm.charactersData:",this.movieService.selectedFilm.charactersData);
           
           
          //  this.movieService.selectedFilm.charactersData = characters;
          return true;
        })
      );
  }
}
