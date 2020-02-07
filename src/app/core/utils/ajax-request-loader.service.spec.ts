import { TestBed } from '@angular/core/testing';

import { AjaxRequestLoaderService } from './ajax-request-loader.service';

describe('AjaxRequestLoaderService', () => {
  let service: AjaxRequestLoaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AjaxRequestLoaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
