import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ElectricityPage } from './electricity.page';

describe('ElectricityPage', () => {
  let component: ElectricityPage;
  let fixture: ComponentFixture<ElectricityPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ElectricityPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
