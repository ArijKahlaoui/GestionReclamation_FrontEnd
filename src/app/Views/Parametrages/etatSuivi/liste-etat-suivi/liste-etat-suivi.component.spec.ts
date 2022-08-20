import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeEtatSuiviComponent } from './liste-etat-suivi.component';

describe('ListeEtatSuiviComponent', () => {
  let component: ListeEtatSuiviComponent;
  let fixture: ComponentFixture<ListeEtatSuiviComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeEtatSuiviComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeEtatSuiviComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
