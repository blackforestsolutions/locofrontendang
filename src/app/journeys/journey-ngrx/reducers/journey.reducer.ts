import { Journey } from '../../../datamodel/journey';
import { Action, createReducer, on } from '@ngrx/store';
import * as JourneyActions from '../actions/journey.actions';

export const journeyFeatureKey = 'journey';

export interface State {
  journeys: Journey[];
  loading: boolean;
}

export const initialState: State = {
  journeys: [],
  loading: false
};

const journeyReducer = createReducer(
  initialState,

  on(JourneyActions.loadJourneys, state => {
    return {
      ...state,
      loading: true
    };
  }),

  on(JourneyActions.loadJourneysSuccess, (state, action) => {
    return {
      ...state,
      journeys: action.journeys
    };
  }),

  on(JourneyActions.loadJourneysFailure, (state, action) => state),

);

export function reducer(state: State | undefined, action: Action) {
  return journeyReducer(state, action);
}
