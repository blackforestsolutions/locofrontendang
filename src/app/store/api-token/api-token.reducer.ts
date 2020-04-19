import { Action, createReducer, on } from '@ngrx/store';
import * as ApiTokenActions from './api-token.actions';
import { ApiTokenAndUrlInformation } from '@blackforestsolutions/locodatamodel';

export const apiTokenFeatureKey = 'apiToken';

export interface State {
  apiToken: ApiTokenAndUrlInformation;
}

export const initialState: State = {
  apiToken: {
    departure: '',
    arrival: '',
    arrivalDate: new Date().toISOString(),
    departureDate: new Date().toISOString(),
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
