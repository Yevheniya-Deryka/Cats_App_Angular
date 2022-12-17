import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CatState } from '../app.states';

const selectCatsState = createFeatureSelector<CatState>('catState');

export const selectCats = createSelector(
  selectCatsState,
  (state: CatState) => state.cats
);
