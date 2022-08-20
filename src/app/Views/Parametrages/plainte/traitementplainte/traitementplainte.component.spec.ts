import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraitementplainteComponent } from './traitementplainte.component';

describe('TraitementplainteComponent', () => {
  let component: TraitementplainteComponent;
  let fixture: ComponentFixture<TraitementplainteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TraitementplainteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TraitementplainteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
