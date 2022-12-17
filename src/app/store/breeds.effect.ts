import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { EMPTY, map, mergeMap, withLatestFrom } from 'rxjs';
import { HttpService } from '../services/http.service';
import { breedsFetchAPISuccess, invokeBreedsAPI } from './breeds.action';
import { selectBreeds } from './breeds.selector';

@Injectable()
export class BreedsEffect {
  constructor(
    private actions$: Actions,
    private HttpService: HttpService,
    private store: Store
  ) {}

  loadAllBreeds$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(invokeBreedsAPI),
      withLatestFrom(this.store.select(selectBreeds)),
      mergeMap(([, breedformStore]) => {
        if (breedformStore.length > 0) {
          return EMPTY;
        }
        return this.HttpService.getBreedsList().pipe(
          map((data) => breedsFetchAPISuccess({ allBreeds: data }))
        );
      })
    );
  });
}
