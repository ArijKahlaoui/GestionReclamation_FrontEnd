import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeDecisionComponent } from './liste-decision.component';

describe('ListeDecisionComponent', () => {
  let component: ListeDecisionComponent;
  let fixture: ComponentFixture<ListeDecisionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeDecisionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeDecisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
