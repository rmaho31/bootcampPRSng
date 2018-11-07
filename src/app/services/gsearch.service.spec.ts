import { TestBed, inject } from '@angular/core/testing';

import { GsearchService } from './gsearch.service';

describe('GsearchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GsearchService]
    });
  });

  it('should be created', inject([GsearchService], (service: GsearchService) => {
    expect(service).toBeTruthy();
  }));
});
