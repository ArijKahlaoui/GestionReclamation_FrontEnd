import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeDocumentCategorieComponent } from './liste-document-categorie.component';

describe('ListeDocumentCategorieComponent', () => {
  let component: ListeDocumentCategorieComponent;
  let fixture: ComponentFixture<ListeDocumentCategorieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeDocumentCategorieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeDocumentCategorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
