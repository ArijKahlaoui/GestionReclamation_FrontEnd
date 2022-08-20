import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierEtatSuiviComponent } from './modifier-etat-suivi.component';

describe('ModifierEtatSuiviComponent', () => {
  let component: ModifierEtatSuiviComponent;
  let fixture: ComponentFixture<ModifierEtatSuiviComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierEtatSuiviComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierEtatSuiviComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
