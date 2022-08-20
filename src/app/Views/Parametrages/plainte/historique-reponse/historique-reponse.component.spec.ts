import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoriqueReponseComponent } from './historique-reponse.component';

describe('HistoriqueReponseComponent', () => {
  let component: HistoriqueReponseComponent;
  let fixture: ComponentFixture<HistoriqueReponseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoriqueReponseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoriqueReponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
