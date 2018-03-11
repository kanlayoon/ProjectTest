import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeProductComponent } from './TypeProduct.component';

describe('SupplyComponent', () => {
  let component: TypeProductComponent;
  let fixture: ComponentFixture<TypeProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
