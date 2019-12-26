import * as fromJourney from '../reducers/journey.reducer';
import { selectJourneyState } from './journey.selectors';

describe('Journey Selectors', () => {
  it('should select the feature state', () => {
    const result = selectJourneyState({
      [fromJourney.journeyFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
