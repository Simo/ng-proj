import { TestBed, inject } from '@angular/core/testing';

import { MioservizioService } from './mioservizio.service';

describe('MioservizioService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MioservizioService]
    });
  });

  it('should be created', inject([MioservizioService], (service: MioservizioService) => {
    expect(service).toBeTruthy();
  }));
});
