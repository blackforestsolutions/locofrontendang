import { TestBed } from '@angular/core/testing';
import { JourneyControllerService, ApiTokenAndUrlInformation, Journey } from '@blackforestsolutions/locodatamodel';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable, of } from 'rxjs';
import { JourneysEffects } from './journeys.effects';
import { loadJourneysByToken, loadJourneysByTokenSuccess, loadJourneysByTokenFailure } from './journeys.actions';
import { hot, cold } from 'jasmine-marbles';
import { HttpErrorResponse } from '@angular/common/http';

describe('JourneysEffects', () => {
  let actions$: Observable<any>;
  let effects: JourneysEffects;
  const apiToken: ApiTokenAndUrlInformation = {
    arrival: '',
    departure: '',
    departureDate: new Date().toISOString(),
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        JourneysEffects,
        provideMockActions(() => actions$),
        {
          provide: JourneyControllerService,
          useValue: {
            getJourneys: () => of([{} as Journey]),
          },
        },
      ],
    });

    effects = TestBed.inject<JourneysEffects>(JourneysEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  it('should fire LoadJourneysByTokenSuccess for loadJourneysByToken', () => {
    const action = loadJourneysByToken({ apiToken });
    const completion = loadJourneysByTokenSuccess({ journeys: [{} as Journey] });

    actions$ = hot('--a-', { a: action });
    const expected = cold('--b', { b: completion });

    expect(effects.loadJourneysByToken$).toBeObservable(expected);
  });

  it('should fire LoadJourneysByTokenFailure for loadJourneysByToken when error occurs', () => {
    const action = loadJourneysByToken({ apiToken });
    const completion = loadJourneysByTokenFailure({ error: new HttpErrorResponse({ error: 'failure' }) });

    actions$ = hot('--#', { a: action });
    const expected = cold('--b', { b: completion });

    expect(effects.loadJourneysByToken$).toBeObservable(expected);
  });
});
