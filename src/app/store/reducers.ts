import { ActionReducerMap } from '@ngrx/store';
import { AppState } from '../app.states';
import { catReducer } from './cats.reducer';

export const reducers: ActionReducerMap<AppState> = {
  catState: catReducer
};
