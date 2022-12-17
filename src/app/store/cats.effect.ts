import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType, concatLatestFrom } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { map, mergeMap } from 'rxjs';
import { HttpService } from '../services/http.service';
import { catsFetchAPISuccess, invokeCatsAPI } from '../store/cats.action';
import { selectCats } from '../store/cats.selector';

@Injectable()
export class CatsEffect {
  constructor(
    private actions$: Actions,
    private HttpService: HttpService,
    private store: Store
  ) {}

  loadAllBreeds$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(invokeCatsAPI),
      concatLatestFrom(() => this.store.select(selectCats)),
      mergeMap(([action]) => {
        return this.HttpService.getCatsList(action.limit, action.breed).pipe(
          map((data) => catsFetchAPISuccess({ allCats: data }))
        );
      })
    );
  });
}
