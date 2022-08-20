import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailEtapesDemandesComponent } from './detail-etapes-demandes.component';

describe('DetailEtapesDemandesComponent', () => {
  let component: DetailEtapesDemandesComponent;
  let fixture: ComponentFixture<DetailEtapesDemandesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailEtapesDemandesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailEtapesDemandesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
