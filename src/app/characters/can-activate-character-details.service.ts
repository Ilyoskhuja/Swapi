import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable, of} from 'rxjs';
import {catchError, map, mergeMap} from 'rxjs/operators';
import { Movie } from '../movies/models/movie';
import { MovieService } from '../movies/movie.service';
import { CharactersService} from './characters.service';
import { Character } from './models/character';

@Injectable({
  providedIn: 'root'
})
export class CanActivateCharacterDetailsService implements CanActivate {
  constructor(private MovieService: MovieService,
              private charactersService: CharactersService,
              private router: Router) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.charactersService.selectedCharacter
    && this.charactersService.selectedCharacter.id === parseInt(route.params.characterId, 10)
      ? this.getFilmsForSelectedCharacter()
      : this.charactersService.getCharacter(route.params.characterId).pipe(
        catchError(error => {
          this.router.navigate(['/characters']);
          return of(false);
        }),
        mergeMap((selectedCharacter: Character) => {
          if (selectedCharacter) {
            this.charactersService.selectedCharacter = selectedCharacter;
            return this.getFilmsForSelectedCharacter();
          } else {
            this.router.navigate(['/characters']);
            return of(false);
          }
        }));
  }

  getFilmsForSelectedCharacter(): Observable<boolean> {
    return !!this.charactersService.selectedCharacter.filmsData
      ? of(true)
      : this.MovieService.getFilmsByCharacter(this.charactersService.selectedCharacter).pipe(
        catchError(error => {
          this.router.navigate(['/characters']);
          return of(false);
        }),
        map((films: Movie[]) => {
          this.charactersService.selectedCharacter.filmsData = films;
          return true;
        })
      );
  }
}
