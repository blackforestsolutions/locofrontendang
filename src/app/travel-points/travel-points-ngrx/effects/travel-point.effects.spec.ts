import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { TravelPointEffects } from './travel-point.effects';

describe('TravelPointEffects', () => {
  let actions$: Observable<any>;
  let effects: TravelPointEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        TravelPointEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get<TravelPointEffects>(TravelPointEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
