import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';
import * as TravelPointActions from '../actions/travel-point.actions';
import { TravelPoint } from './../../../../datamodel/travel-point';

export const travelPointFeatureKey = 'travelPoint';

export interface TravelPointState extends EntityState<TravelPoint> {
  loading: boolean;
}

export const adapter: EntityAdapter<TravelPoint> = createEntityAdapter<TravelPoint>();

export const initialState: TravelPointState = adapter.getInitialState({
  loading: false
});

const travelPointReducer = createReducer(
  initialState,

  on(TravelPointActions.loadTravelPoints, state => {
    return {
      ...state,
      loading: true
    };
  }),
  on(TravelPointActions.loadTravelPointsSuccess, (state, action) => {
    return {
      ...adapter.addAll(action.travelPoints, state),
      loading: false
    };
  }),
  on(TravelPointActions.loadTravelPointsFailure, (state, action) => state),

);

export function reducer(state: TravelPointState, action: Action) {
  return travelPointReducer(state, action);
}
