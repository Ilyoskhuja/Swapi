import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

import { Movie } from '../models/movie';

@Component({
  selector: 'swapi-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MovieComponent {
  @Input() movie: Movie;

  openMoviesDetails(movie){
    console.log("openMoviesDetails:",movie);
    
  }
}
