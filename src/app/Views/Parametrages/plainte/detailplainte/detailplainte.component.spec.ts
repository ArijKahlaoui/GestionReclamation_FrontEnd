import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailplainteComponent } from './detailplainte.component';

describe('DetailplainteComponent', () => {
  let component: DetailplainteComponent;
  let fixture: ComponentFixture<DetailplainteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailplainteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailplainteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
