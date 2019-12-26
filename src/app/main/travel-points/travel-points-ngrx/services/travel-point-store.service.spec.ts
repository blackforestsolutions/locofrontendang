import { TestBed } from '@angular/core/testing';

import { TravelPointStoreService } from './travel-point-store.service';

describe('TravelPointStoreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TravelPointStoreService = TestBed.get(TravelPointStoreService);
    expect(service).toBeTruthy();
  });
});
