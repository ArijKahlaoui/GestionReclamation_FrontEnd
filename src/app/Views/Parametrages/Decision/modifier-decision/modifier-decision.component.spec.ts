import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierDecisionComponent } from './modifier-decision.component';

describe('ModifierDecisionComponent', () => {
  let component: ModifierDecisionComponent;
  let fixture: ComponentFixture<ModifierDecisionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierDecisionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierDecisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
