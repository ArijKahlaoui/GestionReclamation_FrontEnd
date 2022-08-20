import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeEtapesDemandesComponent } from './liste-etapes-demandes.component';

describe('ListeEtapesDemandesComponent', () => {
  let component: ListeEtapesDemandesComponent;
  let fixture: ComponentFixture<ListeEtapesDemandesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeEtapesDemandesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeEtapesDemandesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
