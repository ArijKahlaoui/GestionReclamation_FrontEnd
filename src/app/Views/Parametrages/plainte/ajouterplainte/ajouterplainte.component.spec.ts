import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterplainteComponent } from './ajouterplainte.component';

describe('AjouterplainteComponent', () => {
  let component: AjouterplainteComponent;
  let fixture: ComponentFixture<AjouterplainteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterplainteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterplainteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
