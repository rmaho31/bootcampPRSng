import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseRequestListComponent } from './purchaserequest-list.component';

describe('PurchaserequestListComponent', () => {
  let component: PurchaseRequestListComponent;
  let fixture: ComponentFixture<PurchaseRequestListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchaseRequestListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchaseRequestListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
