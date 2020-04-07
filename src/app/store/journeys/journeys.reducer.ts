import { Action, createReducer, on } from '@ngrx/store';
import * as JourneysActions from './journeys.actions';
import { Journey } from 'src/model/locodatamodel';
import { EntityState, createEntityAdapter } from '@ngrx/entity';

export const journeysFeatureKey = 'journeys';

export interface State extends EntityState<Journey> {
  loading: boolean;
}

export const adapter = createEntityAdapter<Journey>();

export const initialState: State = adapter.getInitialState({
  loading: false,
});

const journeysReducer = createReducer(
  initialState,
  on(JourneysActions.loadJourneysByToken, (state) => {
    return {
      ...state,
      loading: true,
    };
  }),
  on(JourneysActions.loadJourneysByTokenSuccess, (state, action) => {
    return {
      ...adapter.addAll(action.journeys, state),
      loading: false,
    };
  }),
  on(JourneysActions.loadJourneysByTokenFailure, (state, action) => {
    return {
      ...state,
      loading: false,
    };
  })
);

export function reducer(state: State | undefined, action: Action) {
  return journeysReducer(state, action);
}
