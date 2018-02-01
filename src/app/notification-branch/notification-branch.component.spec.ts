import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationBranchComponent } from './notification-branch.component';

describe('NotificationBranchComponent', () => {
  let component: NotificationBranchComponent;
  let fixture: ComponentFixture<NotificationBranchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotificationBranchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationBranchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
