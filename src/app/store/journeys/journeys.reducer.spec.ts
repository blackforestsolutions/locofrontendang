import { HttpErrorResponse } from '@angular/common/http';
import { Action } from '@ngrx/store';
import { Journey } from 'src/test/locodatamodel';
import { apiToken } from '../../../test/test-object-mother.spec';
import { loadJourneysByToken, loadJourneysByTokenFailure, loadJourneysByTokenSuccess } from './journeys.actions';
import * as fromJourneys from './journeys.reducer';

describe('Journeys Reducer', () => {
  it('should create initialState correctly', () => {
    const { initialState } = fromJourneys;
    const action = {} as any;
    const state = fromJourneys.reducer(undefined, action);
    expect(state).toEqual(initialState);
    expect(state.loading).toBeFalsy();
  });

  describe('load Journeys by Token', () => {
    const state = {
      loading: false,
      ids: [],
      entities: {},
    };

    it('should enable the loading flag', () => {
      const action = loadJourneysByToken({ apiToken });

      const newState = fromJourneys.reducer(state, action);
      expect(newState.loading).toBeTruthy();
      expect({ ...state, loading: true }).toEqual(newState);
    });
  });

  describe('load Journeys by Token Success', () => {
    let action: Action;
    let newState: fromJourneys.State;
    const journeys: Journey[] = [{} as Journey, {} as Journey, {} as Journey];
    const state = {
      loading: true,
      ids: [],
      entities: {},
    };

    beforeEach(() => {
      action = loadJourneysByTokenSuccess({ journeys });
      newState = fromJourneys.reducer(state, action);
    });

    it('should disable the loading flag when success', () => {
      expect(newState.loading).toBeFalsy();
    });

    // it('should change the journey list', () => {});
  });

  describe('load Journeys by Token Failure', () => {
    let action: Action;
    let newState: fromJourneys.State;
    const error: HttpErrorResponse = new HttpErrorResponse({});
    const state = {
      loading: true,
      ids: [],
      entities: {},
    };

    beforeEach(() => {
      action = loadJourneysByTokenFailure({ error });
      newState = fromJourneys.reducer(state, action);
    });

    it('should disable the loading flag when errors', () => {
      expect(newState.loading).toBeFalsy();
    });

    it('should should have the same state', () => {
      expect(newState).toEqual({ ...state, loading: false });
    });
  });
});
