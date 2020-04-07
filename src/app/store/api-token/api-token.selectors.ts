import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromApiToken from './api-token.reducer';

export const selectApiTokenState = createFeatureSelector<fromApiToken.State>(fromApiToken.apiTokenFeatureKey);

export const getApiToken = createSelector(selectApiTokenState, (state) => state.apiToken);
