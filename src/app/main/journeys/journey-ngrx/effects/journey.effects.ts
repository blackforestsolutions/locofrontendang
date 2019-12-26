import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';

import * as JourneyActions from '../actions/journey.actions';



@Injectable()
export class JourneyEffects {

  // loadJourneys$ = createEffect(() => {
  //   return this.actions$.pipe(

  //     ofType(JourneyActions.loadJourneys),
  //     concatMap(() =>
  //       /** An EMPTY observable only emits completion. Replace with your own observable API request */
  //       EMPTY.pipe(
  //         map(jouneys => JourneyActions.loadJourneysSuccess({ journeys })),
  //         catchError(error => of(JourneyActions.loadJourneysFailure({ error }))))
  //     )
  //   );
  // });



  constructor(private actions$: Actions) {}

}
