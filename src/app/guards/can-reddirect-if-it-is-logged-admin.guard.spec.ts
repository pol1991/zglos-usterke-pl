import { TestBed } from '@angular/core/testing';

import { CanReddirectIfItIsLoggedAdminGuard } from './can-reddirect-if-it-is-logged-admin.guard';

describe('LoggedAdminGuard', () => {
  let guard: CanReddirectIfItIsLoggedAdminGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CanReddirectIfItIsLoggedAdminGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
