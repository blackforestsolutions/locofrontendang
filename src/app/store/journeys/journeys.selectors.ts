import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromJourneys from './journeys.reducer';

export const selectJourneysState = createFeatureSelector<fromJourneys.State>(fromJourneys.journeysFeatureKey);

const { selectAll, selectEntities, selectIds, selectTotal } = fromJourneys.adapter.getSelectors();

export const getJourneysLoading = createSelector(selectJourneysState, (state) => state.loading);

export const getJourneysByApiToken = createSelector(selectJourneysState, selectAll);
