import { TestBed } from '@angular/core/testing';

import { NewLaborService } from './new-labor.service';

describe('NewLaborService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NewLaborService = TestBed.get(NewLaborService);
    expect(service).toBeTruthy();
  });
});
