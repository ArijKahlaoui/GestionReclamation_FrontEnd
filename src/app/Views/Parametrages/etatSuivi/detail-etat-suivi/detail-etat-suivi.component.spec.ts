import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailEtatSuiviComponent } from './detail-etat-suivi.component';

describe('DetailEtatSuiviComponent', () => {
  let component: DetailEtatSuiviComponent;
  let fixture: ComponentFixture<DetailEtatSuiviComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailEtatSuiviComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailEtatSuiviComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
