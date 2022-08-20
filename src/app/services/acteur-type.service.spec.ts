import { TestBed } from '@angular/core/testing';

import { ActeurTypeService } from './acteur-type.service';

describe('ActeurTypeService', () => {
  let service: ActeurTypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActeurTypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
