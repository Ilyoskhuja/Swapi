import {
  Component,
  OnInit,
  ChangeDetectionStrategy
} from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { State } from '../movies.reducer';
import { FetchMovies, ChangePage, Pagination } from '../movies.actions';
import {
  getMovies,
  getIsLoading,
  // getIsFirstPage,
  // getIsLastPage
} from '../../reducers/index';
import { Movie } from '../models/movie';

@Component({
  selector: 'swapi-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MoviesListComponent implements OnInit {
  movies$: Observable<Movie[]>;
  isFirst$: Observable<boolean>;
  isLast$: Observable<boolean>;
  isLoading$: Observable<boolean>;

  constructor(private store: Store<State>) {}

  ngOnInit() {
    this.movies$ = this.store.select(getMovies);
    console.log("movies:",this.movies$);
    
    // this.isFirst$ = this.store.select(getIsFirstPage);
    // this.isLast$ = this.store.select(getIsLastPage);
    this.isLoading$ = this.store.select(getIsLoading);

    this.store.dispatch(new FetchMovies());
  }

  prev() {
    this.store.dispatch(new ChangePage(Pagination.PREV));
  }

  next() {
    this.store.dispatch(new ChangePage(Pagination.NEXT));
  }

  trackByUrl(index: number, hero: Movie): string {
    return hero.title;
  }
}
