import { TestBed } from '@angular/core/testing';

import { CanGoToAdminPanelGuard } from './can-go-to-admin-panel.guard';

describe('AdminPanelGuard', () => {
  let guard: CanGoToAdminPanelGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CanGoToAdminPanelGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
