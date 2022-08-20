import { TestBed } from '@angular/core/testing';

import { DocumentCategorieService } from './document-categorie.service';

describe('DocumentCategorieService', () => {
  let service: DocumentCategorieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DocumentCategorieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
