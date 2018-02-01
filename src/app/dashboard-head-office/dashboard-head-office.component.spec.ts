import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardHeadOfficeComponent } from './dashboard-head-office.component';

describe('DashboardHeadOfficeComponent', () => {
  let component: DashboardHeadOfficeComponent;
  let fixture: ComponentFixture<DashboardHeadOfficeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardHeadOfficeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardHeadOfficeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
