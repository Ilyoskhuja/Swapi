import {Component, OnInit} from '@angular/core';
import { getCharacter, getCharacterMovies, State } from '../../reducers';
import { CharactersService} from '../characters.service';
import { Character } from '../models/character';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Movie } from '../../movies/models/movie';
import { FetchCharacter, FetchCharacterMovies } from '../../movies/movies.actions';
import { Router } from '@angular/router';
import { MovieService } from '../../movies/movie.service';
@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.scss']
})
export class CharacterDetailsComponent implements OnInit {
  films$: Observable<Movie[]> = this.store.pipe(select(getCharacterMovies));
  character$: Observable<Character> = this.store.pipe(select(getCharacter));

  constructor(public movieService: MovieService,private router: Router,public charactersService: CharactersService, private store: Store<State>,) {
  }

  ngOnInit() {
    // this.character = this.charactersService.selectedCharacter;
    // console.log("CharacterDetailsComponent");
    this.store.dispatch(new FetchCharacter());

    this.store.dispatch(new FetchCharacterMovies());
    // console.log("---------this.film:-----------", this.films$);

  }
  openfilm(movie: Movie) {
    // console.log("openMoviesDetails:", movie);
    this.movieService.selectedFilm = movie;
    // console.log("movie.id:", movie.id);


    this.router.navigate(['/movies', movie.id]);
  
  }

}
