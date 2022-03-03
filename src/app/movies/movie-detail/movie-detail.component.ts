import { Component, OnInit } from '@angular/core';
import { Movie } from '../models/movie';
import { MovieService } from '../movie.service';
import {  Store } from '@ngrx/store';
import { State } from '../movies.reducer';
import { Observable } from 'rxjs';
import { getMovieCharacters } from '../../reducers';
@Component({
  selector: 'movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {
  film: Observable<Movie['charactersData']>;
  constructor(public MovieService: MovieService,
    private store: Store<State>) { }

  ngOnInit(): void {
    console.log("ngOnInit");
    
    this.film = this.store.select(getMovieCharacters);
    console.log("this.film:", this.film);
  
  }

}
