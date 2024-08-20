import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CollegePage } from './college.page';

describe('CollegePage', () => {
  let component: CollegePage;
  let fixture: ComponentFixture<CollegePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CollegePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
