import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { MoviesListComponent } from './movies-list/movies-list.component';
import { MovieComponent } from './movie/movie.component';
import { SwapiService } from './swapi.service';
import { EffectsModule } from '@ngrx/effects';
import { MoviesEffects } from './movies.effects';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule,
    EffectsModule.forFeature([MoviesEffects])
  ],
  declarations: [
    MoviesListComponent,
    MovieComponent,
    MovieDetailComponent
  ],
  providers: [
    SwapiService
  ],
  exports: [
    MoviesListComponent
  ]
})
export class MoviesModule {}
