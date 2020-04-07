import { updateApiToken } from './api-token.actions';
import * as fromApiToken from './api-token.reducer';
import { apiToken } from '../../../model/test-object-mother.spec';

describe('ApiToken Reducer', () => {
  it('should create initialState correctly', () => {
    const { initialState } = fromApiToken;
    const action = {} as any;
    const state = fromApiToken.reducer(undefined, action);
    expect(state).toEqual(initialState);
    expect(state.apiToken.departure).toBe('');
    expect(state.apiToken.arrival).toBe('');
    expect(state.apiToken.departureDate).toBe(fromApiToken.initialState.apiToken.departureDate);
  });

  it('should update ApiToken', () => {
    const state = { apiToken };
    const action = updateApiToken({ apiToken });
    const newState = fromApiToken.reducer(state, action);
    expect(newState).toEqual(state);
  });
});
