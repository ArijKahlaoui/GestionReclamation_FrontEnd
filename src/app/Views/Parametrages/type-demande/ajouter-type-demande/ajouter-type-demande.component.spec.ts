import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterTypeDemandeComponent } from './ajouter-type-demande.component';

describe('AjouterTypeDemandeComponent', () => {
  let component: AjouterTypeDemandeComponent;
  let fixture: ComponentFixture<AjouterTypeDemandeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterTypeDemandeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterTypeDemandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
