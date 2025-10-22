import { TestBed } from '@angular/core/testing';
import { HidrowebService } from './hidroweb.service';


describe('HidrowebService', () => {
  let service: HidrowebService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HidrowebService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
