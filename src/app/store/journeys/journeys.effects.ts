import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import * as JourneysActions from './journeys.actions';
import { JourneyControllerService } from '@blackforestsolutions/locodatamodel';

@Injectable()
export class JourneysEffects {
  loadJourneysByToken$ = createEffect(() =>
    this.actions$.pipe(
      ofType(JourneysActions.loadJourneysByToken),
      map((action) => action.apiToken),
      switchMap((apiToken) =>
        this.journeyService.getJourneys(apiToken).pipe(
          map((journeys) => JourneysActions.loadJourneysByTokenSuccess({ journeys })),
          catchError((error) => of(JourneysActions.loadJourneysByTokenFailure({ error })))
        )
      )
    )
  );

  constructor(private actions$: Actions, private journeyService: JourneyControllerService) {}
}
