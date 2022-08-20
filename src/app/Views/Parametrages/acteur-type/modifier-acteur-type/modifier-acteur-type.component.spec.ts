import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierActeurTypeComponent } from './modifier-acteur-type.component';

describe('ModifierActeurTypeComponent', () => {
  let component: ModifierActeurTypeComponent;
  let fixture: ComponentFixture<ModifierActeurTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierActeurTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierActeurTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
