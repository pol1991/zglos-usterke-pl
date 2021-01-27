import { TestBed } from '@angular/core/testing';

import { CanReddirectIfItIsLoggedUserGuard } from './can-reddirect-if-it-is-logged-user.guard';

describe('LoggedUserGuard', () => {
  let guard: CanReddirectIfItIsLoggedUserGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CanReddirectIfItIsLoggedUserGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
