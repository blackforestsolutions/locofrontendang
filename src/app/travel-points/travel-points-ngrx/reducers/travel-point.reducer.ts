import { Action, createReducer, on } from '@ngrx/store';
import * as TravelPointActions from '../actions/travel-point.actions';
import { TravelPoint } from './../../../datamodel/travel-point';

export const travelPointFeatureKey = 'travelPoint';

export interface State {
  travelPoints: TravelPoint[];
  loading: boolean;
}

export const initialState: State = {
  travelPoints: [],
  loading: false
};

const travelPointReducer = createReducer(
  initialState,

  on(TravelPointActions.loadTravelPoints, state => state),
  on(TravelPointActions.loadTravelPointsSuccess, (state, action) => state),
  on(TravelPointActions.loadTravelPointsFailure, (state, action) => state),

);

export function reducer(state: State | undefined, action: Action) {
  return travelPointReducer(state, action);
}
