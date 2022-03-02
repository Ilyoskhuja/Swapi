import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {carComponent} from './car/car.component';
import {LoginComponent} from './login/login.component';
import {searchPartsComponent} from './search-Parts/search-Parts.component';
import { MovieDetailComponent } from './movies/movie-detail/movie-detail.component';
import { CanActivateMovieDetailsService } from './movies/can-active-movie-details.service';
import { CharactersListComponent } from './characters/characters-list/characters-list.component';
import { CharacterDetailsComponent } from './characters/character-details/character-details.component';
import { CanActivateCharacterDetailsService } from './characters/can-activate-character-details.service';
import { MoviesListComponent } from './movies/movies-list/movies-list.component';

const routes: Routes = [
  {
    path: 'movies',
    component: MoviesListComponent

  },
 
  {
    path: 'movies/:movieId',
    component: MovieDetailComponent,
   canActivate: [CanActivateMovieDetailsService]
  },
  {
    path: 'mov',
    component: MovieDetailComponent,
  },
  
  {path: 'characters', component: CharactersListComponent},
  {path: 'characters/:characterId', component: CharacterDetailsComponent, canActivate: [CanActivateCharacterDetailsService]},
  {
    path: '**',
    redirectTo: '/movies',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
