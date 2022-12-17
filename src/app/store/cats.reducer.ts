import { createReducer, on } from '@ngrx/store';
import { Cat } from '../models';
import { catsFetchAPISuccess } from '../store/cats.action';

export const initialState: ReadonlyArray<Cat> = [];

export const catReducer = createReducer(
  initialState,
  on(catsFetchAPISuccess, (state, { allCats }): Cat[] => {
    return allCats;
  })
);
