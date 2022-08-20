import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeplainteComponent } from './listeplainte.component';

describe('ListeplainteComponent', () => {
  let component: ListeplainteComponent;
  let fixture: ComponentFixture<ListeplainteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeplainteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeplainteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
