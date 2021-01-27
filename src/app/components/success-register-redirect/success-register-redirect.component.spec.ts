import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessRegisterRedirectComponent } from './success-register-redirect.component';

describe('SuccessRegisterRedirectComponent', () => {
  let component: SuccessRegisterRedirectComponent;
  let fixture: ComponentFixture<SuccessRegisterRedirectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuccessRegisterRedirectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccessRegisterRedirectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
