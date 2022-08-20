import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterDecisionComponent } from './ajouter-decision.component';

describe('AjouterDecisionComponent', () => {
  let component: AjouterDecisionComponent;
  let fixture: ComponentFixture<AjouterDecisionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterDecisionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterDecisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
