import { TestBed } from '@angular/core/testing';

import { AuthInterceptorServiceService } from './auth-interceptor-service.service';

describe('AuthInterceptorServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthInterceptorServiceService = TestBed.get(AuthInterceptorServiceService);
    expect(service).toBeTruthy();
  });
});
