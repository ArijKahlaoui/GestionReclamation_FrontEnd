import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterEtapesDemandesComponent } from './ajouter-etapes-demandes.component';

describe('AjouterEtapesDemandesComponent', () => {
  let component: AjouterEtapesDemandesComponent;
  let fixture: ComponentFixture<AjouterEtapesDemandesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterEtapesDemandesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterEtapesDemandesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
