import { TestBed, inject } from '@angular/core/testing';

import { PurchaseRequestService } from './purchaserequest.service';

describe('PurchaseRequestService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PurchaseRequestService]
    });
  });

  it('should be created', inject([PurchaseRequestService], (service: PurchaseRequestService) => {
    expect(service).toBeTruthy();
  }));
});
