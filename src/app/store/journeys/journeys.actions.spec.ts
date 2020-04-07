import * as fromJourneys from './journeys.actions';
import { from } from 'rxjs';

describe('Journeys Action', () => {
  it('should return correct actions', () => {
    expect(fromJourneys.loadJourneysByToken.type).toBe('[Journeys] Load Journeys By ApiToken');
    expect(fromJourneys.loadJourneysByTokenSuccess.type).toBe('[Journeys] Load Journeys By ApiToken Success');
    expect(fromJourneys.loadJourneysByTokenFailure.type).toBe('[Journeys] Load Journeys By ApiToken Failure');
  });
});
