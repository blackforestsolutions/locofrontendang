import { Journey } from '../../../../datamodel/journey';
import { createAction, props } from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';

export const loadJourneys = createAction(
  '[Journey] Load Journeys'
);

export const loadJourneysSuccess = createAction(
  '[Journey] Load Journeys Success',
  props<{ journeys: Journey[] }>()
);

export const loadJourneysFailure = createAction(
  '[Journey] Load Journeys Failure',
  props<{ error: HttpErrorResponse }>()
);
