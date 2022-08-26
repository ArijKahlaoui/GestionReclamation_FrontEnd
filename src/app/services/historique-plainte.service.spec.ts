import { TestBed } from '@angular/core/testing';

import { HistoriquePlainteService } from './historique-plainte.service';

describe('HistoriquePlainteService', () => {
  let service: HistoriquePlainteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HistoriquePlainteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
