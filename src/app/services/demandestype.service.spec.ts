import { TestBed } from '@angular/core/testing';

import { DemandestypeService } from './demandestype.service';

describe('DemandestypeService', () => {
  let service: DemandestypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DemandestypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
