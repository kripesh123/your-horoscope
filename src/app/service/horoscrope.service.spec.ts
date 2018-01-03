import { TestBed, inject } from '@angular/core/testing';

import { HoroscropeService } from './horoscrope.service';

describe('HoroscropeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HoroscropeService]
    });
  });

  it('should ...', inject([HoroscropeService], (service: HoroscropeService) => {
    expect(service).toBeTruthy();
  }));
});
