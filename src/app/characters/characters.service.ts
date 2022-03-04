import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {forkJoin, Observable} from 'rxjs';
import {finalize, map, tap} from 'rxjs/operators';

import {LoaderService} from '../loader/loader.service';
import { Movie, MoviesResponse } from '../movies/models/movie';
import { Character } from './models/character';

const CHARACTER_HTTP_URL_LENGTH = `https://swapi.dev/api/people/`.length;


@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  selectedCharacter: Character;

  constructor(private http: HttpClient, private loaderService: LoaderService) {
  }

  getCharactersList(pageNumber = 1): Observable<Character> {
    this.loaderService.startLoading();
    return this.http.get<Character>(`https://swapi.dev/api/people/?page=${pageNumber}`)
      .pipe(map((characters => {
        // console.log("--characters--:",characters);
        
          // characters.forEach(character => {
          //   character.id = this.getCharacterId(character.url);
          // });
          return characters;
        }
      )), finalize(() => this.loaderService.finishLoading()));
  }

  getCharactersByFilm(film: Movie) {
    // console.log("getCharactersByFilm");
    
    return forkJoin(film.characters.map(characterUrl => {
      this.loaderService.startLoading();
      // console.log("loaderService");
      
      return this.http.get<Character>(characterUrl)
        .pipe(map(character => {
          
          character.id = this.getCharacterId(character.url);
          
          // console.log("get character",character);
          return character;
        }), finalize(() => this.loaderService.finishLoading()))
    }));
  }

  

  getCharacter(characterId: number): Observable<Character> {
    this.loaderService.startLoading();
    return this.http.get<Character>(`https://swapi.dev/api/people/${characterId}`)
      .pipe(map(character => {
        character.id = this.getCharacterId(character.url);
        return character;
      }), finalize(() => this.loaderService.finishLoading()));
  }

  private getCharacterId(characterUrl: string): number {
    return parseInt(characterUrl.substring(CHARACTER_HTTP_URL_LENGTH, characterUrl.length - 1), 10);
  }
}
