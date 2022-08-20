import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterActeurTypeComponent } from './ajouter-acteur-type.component';

describe('AjouterActeurTypeComponent', () => {
  let component: AjouterActeurTypeComponent;
  let fixture: ComponentFixture<AjouterActeurTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterActeurTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterActeurTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
