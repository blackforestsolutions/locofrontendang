import { getJourneysLoading } from './journeys.selectors';
import { Journey } from 'src/model/locodatamodel';
import { journey } from '../../../model/test-object-mother.spec';

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

  it('should get a journey list', () => {});
});
