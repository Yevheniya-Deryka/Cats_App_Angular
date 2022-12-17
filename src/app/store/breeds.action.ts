import { createAction, props } from '@ngrx/store';
import { Breed } from '../models';

export const invokeBreedsAPI = createAction(
  '[Breeds API] Invoke Breeds Fetch API'
);

export const breedsFetchAPISuccess = createAction(
  '[Breeds API] Fetch API Success',
  props<{ allBreeds: Breed[] }>()
);
