import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailDocumentCategorieComponent } from './detail-document-categorie.component';

describe('DetailDocumentCategorieComponent', () => {
  let component: DetailDocumentCategorieComponent;
  let fixture: ComponentFixture<DetailDocumentCategorieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailDocumentCategorieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailDocumentCategorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
