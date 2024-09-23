import { TestBed } from '@angular/core/testing';

import { MetasCampanhasService } from './metas-campanhas.service';

describe('MetasCampanhasService', () => {
  let service: MetasCampanhasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MetasCampanhasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
