import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailActeurTypeComponent } from './detail-acteur-type.component';

describe('DetailActeurTypeComponent', () => {
  let component: DetailActeurTypeComponent;
  let fixture: ComponentFixture<DetailActeurTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailActeurTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailActeurTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
