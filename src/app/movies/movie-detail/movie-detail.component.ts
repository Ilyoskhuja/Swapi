import { Component, OnInit } from '@angular/core';
import { Movie } from '../models/movie';
import { MovieService } from '../movie.service';

@Component({
  selector: 'movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {
  film: Movie;
  constructor(public MovieService: MovieService) { }

  ngOnInit(): void {
    console.log("ngOnInit");
    
    this.film = this.MovieService.selectedFilm;
  }

}
