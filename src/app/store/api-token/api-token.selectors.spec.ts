import { ApiTokenAndUrlInformation } from 'src/model/api-token-and-url-information';
import { getApiToken } from './api-token.selectors';
import { apiToken } from '../../../model/test-object-mother.spec';

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
