import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierEtapesDemandesComponent } from './modifier-etapes-demandes.component';

describe('ModifierEtapesDemandesComponent', () => {
  let component: ModifierEtapesDemandesComponent;
  let fixture: ComponentFixture<ModifierEtapesDemandesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierEtapesDemandesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierEtapesDemandesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
