import { createAction, props } from '@ngrx/store';
import { ApiTokenAndUrlInformation } from 'src/model/api-token-and-url-information';

export const updateApiToken = createAction(
  '[ApiTokenAndUrlInformation] Update ApiToken',
  props<{ apiToken: ApiTokenAndUrlInformation }>()
);
