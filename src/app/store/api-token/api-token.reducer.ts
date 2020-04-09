import { Action, createReducer, on } from '@ngrx/store';
import { ApiTokenAndUrlInformation } from 'src/test/api-token-and-url-information';
import * as ApiTokenActions from './api-token.actions';

export const apiTokenFeatureKey = 'apiToken';

export interface State {
  apiToken: ApiTokenAndUrlInformation;
}

export const initialState: State = {
  apiToken: {
    departure: '',
    arrival: '',
    departureDate: new Date(),
  },
};

const apiTokenReducer = createReducer(
  initialState,
  on(ApiTokenActions.updateApiToken, (state, action) => {
    return {
      ...state,
      apiToken: action.apiToken,
    };
  })
);

export function reducer(state: State | undefined, action: Action) {
  return apiTokenReducer(state, action);
}
