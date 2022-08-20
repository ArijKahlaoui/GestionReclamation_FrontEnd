import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierTypeDemandeComponent } from './modifier-type-demande.component';

describe('ModifierTypeDemandeComponent', () => {
  let component: ModifierTypeDemandeComponent;
  let fixture: ComponentFixture<ModifierTypeDemandeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierTypeDemandeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierTypeDemandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
