import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable, of } from 'rxjs';

import { JourneysEffects } from './journeys.effects';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { JourneyStoreService } from '../services/journey-store.service';

describe('JourneysEffects', () => {
  let actions$: Observable<any>;
  let effects: JourneysEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        JourneysEffects,
        provideMockActions(() => actions$),
        {
          provide: JourneyStoreService,
          useValue: {
            getJourneysBy: () => of(),
          },
        },
      ],
    });

    effects = TestBed.get<JourneysEffects>(JourneysEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
