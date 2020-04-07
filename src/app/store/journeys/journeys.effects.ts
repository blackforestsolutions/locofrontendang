import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { JourneyStoreService } from '../services/journey-store.service';
import * as JourneysActions from './journeys.actions';

@Injectable()
export class JourneysEffects {
  loadJourneysByToken$ = createEffect(() =>
    this.actions$.pipe(
      ofType(JourneysActions.loadJourneysByToken),
      map((action) => action.apiToken),
      switchMap((apiToken) =>
        this.journeyStoreService.getJourneysBy(apiToken).pipe(
          map((journeys) => JourneysActions.loadJourneysByTokenSuccess({ journeys })),
          catchError((error) => of(JourneysActions.loadJourneysByTokenFailure({ error })))
        )
      )
    )
  );

  constructor(private actions$: Actions, private journeyStoreService: JourneyStoreService) {}
}
