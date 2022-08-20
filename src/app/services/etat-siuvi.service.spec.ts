import { TestBed } from '@angular/core/testing';

import { EtatSiuviService } from './etat-siuvi.service';

describe('EtatSiuviService', () => {
  let service: EtatSiuviService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EtatSiuviService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
