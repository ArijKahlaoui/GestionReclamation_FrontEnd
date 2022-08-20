import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeActeurTypeComponent } from './liste-acteur-type.component';

describe('ListeActeurTypeComponent', () => {
  let component: ListeActeurTypeComponent;
  let fixture: ComponentFixture<ListeActeurTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeActeurTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeActeurTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
