import { createAction, props } from '@ngrx/store';
import { Journey } from 'src/test/locodatamodel';
import { HttpErrorResponse } from '@angular/common/http';
import { ApiTokenAndUrlInformation } from 'src/test/api-token-and-url-information';

export const loadJourneysByToken = createAction(
  '[Journeys] Load Journeys By ApiToken',
  props<{ apiToken: ApiTokenAndUrlInformation }>()
);

export const loadJourneysByTokenSuccess = createAction(
  '[Journeys] Load Journeys By ApiToken Success',
  props<{ journeys: Journey[] }>()
);

export const loadJourneysByTokenFailure = createAction(
  '[Journeys] Load Journeys By ApiToken Failure',
  props<{ error: HttpErrorResponse }>()
);
