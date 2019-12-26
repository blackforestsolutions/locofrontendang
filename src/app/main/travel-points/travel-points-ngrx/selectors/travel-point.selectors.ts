import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromTravelPoint from '../reducers/travel-point.reducer';

const { selectAll, selectEntities, selectIds, selectTotal } = fromTravelPoint.adapter.getSelectors();

export const selectTravelPointState = createFeatureSelector<fromTravelPoint.TravelPointState>(
  fromTravelPoint.travelPointFeatureKey
);

const getAllJourneys = createSelector(
  selectTravelPointState, selectAll
);
