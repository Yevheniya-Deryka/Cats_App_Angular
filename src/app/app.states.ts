import { Cat } from './models';

export interface AppState {
  catState: CatState;
}

export interface CatState {
  cats: Cat[];
}
