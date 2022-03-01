import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromMovies from '../movies/movies.reducer';

export interface State {
  movies: fromMovies.State;
}

export const reducers: ActionReducerMap<State> = {
  movies: fromMovies.reducer,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];

export const getMoviesState = createFeatureSelector<fromMovies.State>('movies');
export const getMovies = createSelector(getMoviesState, state => state.data);
export const getIsLoading = createSelector(getMoviesState, state => state.isLoading);
// export const getCurrentPage = createSelector(getMoviesState, state => state.page);
// export const getIsFirstPage = createSelector(getMoviesState, state => !state.previous);
// export const getIsLastPage = createSelector(getMoviesState, state => !state.next);
