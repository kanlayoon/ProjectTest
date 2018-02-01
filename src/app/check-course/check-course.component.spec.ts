import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckCourseComponent } from './check-course.component';

describe('CheckCourseComponent', () => {
  let component: CheckCourseComponent;
  let fixture: ComponentFixture<CheckCourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckCourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
