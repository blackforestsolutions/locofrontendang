import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromJourney from '../reducers/journey.reducer';

export const selectJourneyState = createFeatureSelector<fromJourney.State>(
  fromJourney.journeyFeatureKey
);
