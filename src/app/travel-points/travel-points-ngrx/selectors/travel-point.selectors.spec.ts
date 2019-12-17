import * as fromTravelPoint from '../reducers/travel-point.reducer';
import { selectTravelPointState } from './travel-point.selectors';

describe('TravelPoint Selectors', () => {
  it('should select the feature state', () => {
    const result = selectTravelPointState({
      [fromTravelPoint.travelPointFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
