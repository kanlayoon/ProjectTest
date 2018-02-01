import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderBranchComponent } from './header-branch.component';

describe('HeaderBranchComponent', () => {
  let component: HeaderBranchComponent;
  let fixture: ComponentFixture<HeaderBranchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderBranchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderBranchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
