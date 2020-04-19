import { createAction, props } from '@ngrx/store';
import { ApiTokenAndUrlInformation } from '@blackforestsolutions/locodatamodel';

export const updateApiToken = createAction(
  '[ApiTokenAndUrlInformation] Update ApiToken',
  props<{ apiToken: ApiTokenAndUrlInformation }>()
);
