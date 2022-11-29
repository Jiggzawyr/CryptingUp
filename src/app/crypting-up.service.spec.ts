import { TestBed } from '@angular/core/testing';

import { CryptingUpService } from './crypting-up.service';

describe('CryptingUpService', () => {
  let service: CryptingUpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CryptingUpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
