import { createAction, props } from '@ngrx/store';
import { Cat } from '../models';

export const invokeCatsAPI = createAction(
  '[Breeds API] Invoke Cats Fetch API',
  props<{ limit?: number | null; breed?: string | null }>()
);

export const catsFetchAPISuccess = createAction(
  '[Breeds API] Fetch API Success',
  props<{ allCats: Cat[] }>()
);
