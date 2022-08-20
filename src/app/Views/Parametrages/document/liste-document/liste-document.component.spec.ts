import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeDocumentComponent } from './liste-document.component';

describe('ListeDocumentComponent', () => {
  let component: ListeDocumentComponent;
  let fixture: ComponentFixture<ListeDocumentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeDocumentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
