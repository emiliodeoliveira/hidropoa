import { TestBed } from '@angular/core/testing';

import { SaladesituacaoServiceService } from './saladesituacao-service.service';

describe('SaladesituacaoServiceService', () => {
  let service: SaladesituacaoServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SaladesituacaoServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
