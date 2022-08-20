import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterDocumentCategorieComponent } from './ajouter-document-categorie.component';

describe('AjouterDocumentCategorieComponent', () => {
  let component: AjouterDocumentCategorieComponent;
  let fixture: ComponentFixture<AjouterDocumentCategorieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterDocumentCategorieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterDocumentCategorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
