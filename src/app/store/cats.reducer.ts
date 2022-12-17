import { createReducer, on } from '@ngrx/store';
import { CatState } from '../app.states';
import { catsFetchAPISuccess } from '../store/cats.action';

export const initialState: CatState = { cats: [] };

export const catReducer = createReducer(
  initialState,
  on(catsFetchAPISuccess, (state, { allCats }): CatState => {
    return { cats: allCats };
  })
);
