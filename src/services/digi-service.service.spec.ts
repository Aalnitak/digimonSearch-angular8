import { TestBed } from '@angular/core/testing';

import { DigiServiceService } from './digi-service.service';

describe('DigiServiceService', () => {
  let service: DigiServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DigiServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
