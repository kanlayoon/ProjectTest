import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsingproductComponent } from './usingproduct.component';

describe('UsingproductComponent', () => {
  let component: UsingproductComponent;
  let fixture: ComponentFixture<UsingproductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsingproductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsingproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
