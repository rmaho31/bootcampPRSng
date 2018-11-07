import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorPurchaseOrderComponent } from './vendor-purchaseorder.component';

describe('VendorPurchaseOrderComponent', () => {
  let component: VendorPurchaseOrderComponent;
  let fixture: ComponentFixture<VendorPurchaseOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendorPurchaseOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorPurchaseOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
