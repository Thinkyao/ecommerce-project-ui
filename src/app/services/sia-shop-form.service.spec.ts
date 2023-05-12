import { TestBed } from '@angular/core/testing';

import { SiaShopFormService } from './sia-shop-form.service';

describe('SiaShopFormService', () => {
  let service: SiaShopFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SiaShopFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
