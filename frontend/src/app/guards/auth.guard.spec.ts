import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { AuthGuard } from './auth.guard';


describe('authGuard', () => {
  let authGuard: AuthGuard;
  const executeGuard: CanActivateFn = (...guardParameters) =>
      authGuard.canActivate(...guardParameters);

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
