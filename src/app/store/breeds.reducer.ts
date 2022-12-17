import { createReducer, on } from '@ngrx/store';
import { Breed } from '../models';
import { breedsFetchAPISuccess } from '../store/breeds.action';

export const initialState: ReadonlyArray<Breed> = [];

export const breedReducer = createReducer(
  initialState,
  on(breedsFetchAPISuccess, (state, { allBreeds }): Breed[] => {
    return allBreeds;
  })
);
