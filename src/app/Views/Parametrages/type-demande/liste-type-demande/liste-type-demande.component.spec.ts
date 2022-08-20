import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeTypeDemandeComponent } from './liste-type-demande.component';

describe('ListeTypeDemandeComponent', () => {
  let component: ListeTypeDemandeComponent;
  let fixture: ComponentFixture<ListeTypeDemandeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeTypeDemandeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeTypeDemandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
