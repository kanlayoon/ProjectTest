import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsingproductBranchComponent } from './usingproduct-branch.component';

describe('UsingproductBranchComponent', () => {
  let component: UsingproductBranchComponent;
  let fixture: ComponentFixture<UsingproductBranchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsingproductBranchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsingproductBranchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
