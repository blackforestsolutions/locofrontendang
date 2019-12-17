import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromTravelPoint from '../reducers/travel-point.reducer';

export const selectTravelPointState = createFeatureSelector<fromTravelPoint.State>(
  fromTravelPoint.travelPointFeatureKey
);
