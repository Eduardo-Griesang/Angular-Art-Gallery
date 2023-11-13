import { TestBed } from '@angular/core/testing';

import { ArtsApiService } from './arts-api.service';

describe('ArtsApiService', () => {
  let service: ArtsApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArtsApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
