import { getJourneysLoading } from './journeys.selectors';

describe('Journeys Selectors', () => {
  let initialState: any;

  beforeEach(() => {
    initialState = {};
  });

  it('should get loading parameter', () => {
    const state = {
      loading: true,
      ids: [],
      entities: {},
    };

    const result = getJourneysLoading.projector(state);

    expect(result).toBeTruthy();
  });

  it('should get a journey list', () => {
    expect(true).toBeFalsy();
  });
});
