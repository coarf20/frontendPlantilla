import { TestBed } from '@angular/core/testing';

import { PapeleriaService } from './papeleria.service';

describe('PapeleriaService', () => {
  let service: PapeleriaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PapeleriaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
