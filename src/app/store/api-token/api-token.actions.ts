import { createAction, props } from '@ngrx/store';
import { ApiTokenAndUrlInformation } from 'src/test/api-token-and-url-information';

export const updateApiToken = createAction(
  '[ApiTokenAndUrlInformation] Update ApiToken',
  props<{ apiToken: ApiTokenAndUrlInformation }>()
);
