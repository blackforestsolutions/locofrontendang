import { createAction, props } from '@ngrx/store';
import { Journey } from 'src/model/locodatamodel';
import { HttpErrorResponse } from '@angular/common/http';
import { ApiTokenAndUrlInformation } from 'src/model/api-token-and-url-information';

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
