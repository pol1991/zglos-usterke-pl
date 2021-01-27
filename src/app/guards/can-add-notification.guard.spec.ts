import { TestBed } from '@angular/core/testing';

import { CanAddNotificationGuard } from './can-add-notification.guard';

describe('AddNotificationGuard', () => {
  let guard: CanAddNotificationGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CanAddNotificationGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
