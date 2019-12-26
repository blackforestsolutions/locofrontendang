import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap, switchMap } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';

import * as TravelPointActions from '../actions/travel-point.actions';
import { TravelPointStoreService } from '../services/travel-point-store.service';



@Injectable()
export class TravelPointEffects {

  constructor(
    private actions$: Actions,
    private travelPointStoreService: TravelPointStoreService
  ) {}

  loadTravelPoints$ = createEffect(() => this.actions$.pipe(
    ofType(TravelPointActions.loadTravelPoints),
    switchMap(() => {
      return this.travelPointStoreService.getTravelPointsBy().pipe(
        map(travelPoints => TravelPointActions.loadTravelPointsSuccess({ travelPoints })),
        catchError(error => of(TravelPointActions.loadTravelPointsFailure({ error })))
      );
    })
  ));

}
