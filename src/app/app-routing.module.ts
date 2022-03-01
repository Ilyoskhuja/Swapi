import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {carComponent} from './car/car.component';
import {LoginComponent} from './login/login.component';
import {searchPartsComponent} from './search-Parts/search-Parts.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent

  },
  // {
  //   path:"search-Parts",
  //   component: searchPartsComponent
  // },
  {
    path: 'movie/:movieId',
    component: carComponent
  },
  {
    path: '**',
    redirectTo: '/'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
