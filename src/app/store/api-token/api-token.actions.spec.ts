import * as fromApiToken from './api-token.actions';

describe('ApiToken Actions', () => {
  it('should return correct Actions', () => {
    expect(fromApiToken.updateApiToken.type).toBe('[ApiTokenAndUrlInformation] Update ApiToken');
  });
});
