import { TestBed } from '@angular/core/testing';

import { JourneyStoreService } from './journey-store.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('JourneyStoreService', () => {
  let service: JourneyStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        {
          provide: 'API_URL',
          useValue: '',
        },
      ],
    });
    service = TestBed.inject(JourneyStoreService);
  });

  beforeEach(() => {});

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
