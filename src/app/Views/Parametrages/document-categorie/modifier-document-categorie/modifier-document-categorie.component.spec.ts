import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierDocumentCategorieComponent } from './modifier-document-categorie.component';

describe('ModifierDocumentCategorieComponent', () => {
  let component: ModifierDocumentCategorieComponent;
  let fixture: ComponentFixture<ModifierDocumentCategorieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierDocumentCategorieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierDocumentCategorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
