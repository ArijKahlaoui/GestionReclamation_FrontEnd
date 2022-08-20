import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterEtatSuiviComponent } from './ajouter-etat-suivi.component';

describe('AjouterEtatSuiviComponent', () => {
  let component: AjouterEtatSuiviComponent;
  let fixture: ComponentFixture<AjouterEtatSuiviComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterEtatSuiviComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterEtatSuiviComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
