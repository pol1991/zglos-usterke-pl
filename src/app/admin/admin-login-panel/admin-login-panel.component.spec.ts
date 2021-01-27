import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminLoginPanelComponent } from './admin-login-panel.component';

describe('AdminLoginPanelComponent', () => {
  let component: AdminLoginPanelComponent;
  let fixture: ComponentFixture<AdminLoginPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminLoginPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminLoginPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
