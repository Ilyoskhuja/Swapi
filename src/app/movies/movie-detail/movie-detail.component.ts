import { Component, NgModule, OnInit } from '@angular/core';
import { Movie } from '../models/movie';
import { MovieService } from '../movie.service';
import {  select, Store } from '@ngrx/store';
import { State } from '../movies.reducer';
import { Observable } from 'rxjs';
import { getMovie, getMovieCharacters } from '../../reducers';
import { map } from 'rxjs/operators';
import { FetchMovie, FetchMovieCharacters } from '../movies.actions';

@Component({
  selector: 'movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {
  film$: Observable<Movie>=this.store.pipe(select(getMovie));
  constructor(public MovieService: MovieService,
    private store: Store<State>) { }

  ngOnInit(): void {
    console.log("ngOnInit");
    
  
   
    
    this.store.dispatch(new FetchMovie());
    console.log("---------this.film:-----------", this.film$);
  }

}
