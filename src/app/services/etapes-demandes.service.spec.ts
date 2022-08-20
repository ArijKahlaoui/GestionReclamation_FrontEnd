import { TestBed } from '@angular/core/testing';

import { EtapesDemandesService } from './etapes-demandes.service';

describe('EtapesDemandesService', () => {
  let service: EtapesDemandesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EtapesDemandesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
