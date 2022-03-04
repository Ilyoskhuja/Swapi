import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {HomeComponent} from './home/home.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSelectModule} from '@angular/material/select';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {MatToolbarModule} from '@angular/material/toolbar';
import {HttpClientModule} from '@angular/common/http';
// import {carDialogComponent} from './car-dialog/car-dialog.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatMomentDateModule} from '@angular/material-moment-adapter';

// import {MessagesComponent} from './messages/messages.component';
// import { LoadingComponent } from './loading/loading.component';
// import { MessagesService } from './messages/messages.service';
// import { LoadingService } from './loading/loading.service';
// import { CARSCardListComponent } from './cars-card-list/cars-card-list.component';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { MoviesModule } from './movies/movies.module';
import { environment } from '../environments/environment';
import { metaReducers, reducers } from './reducers';
import { AppEffects } from './app.effects';
import { CharactersListComponent } from './characters/characters-list/characters-list.component';
import { CharactersListTableComponent } from './characters/characters-list-table/characters-list-table.component';
import { CharacterDetailsComponent } from './characters/character-details/character-details.component';


@NgModule({
  declarations: [
    AppComponent,
    CharactersListComponent,
    CharactersListTableComponent,
    CharacterDetailsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatToolbarModule,
    MatTableModule,
    
    MatCardModule,
    
    MatButtonModule,
    MatIconModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([AppEffects]),
    MoviesModule,
    // StoreRouterConnectingModule.forRoot(),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ],
 
  providers: [
  ],
  bootstrap: [AppComponent],
  // entryComponents: [carDialogComponent]
})
export class AppModule {
}
