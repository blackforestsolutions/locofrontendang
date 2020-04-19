import { getApiToken } from './api-token.selectors';
import { apiToken } from '../../../test/test-object-mother.spec';

describe('ApiToken Selectors', () => {
  let initialState: any;

  beforeEach(() => {
    initialState = { apiToken };
  });

  it('should get an apiToken', () => {
    const result = getApiToken.projector(initialState);

    expect(result).toEqual(apiToken);
  });
});
