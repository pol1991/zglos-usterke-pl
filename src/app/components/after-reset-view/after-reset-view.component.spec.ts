import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfterResetViewComponent } from './after-reset-view.component';

describe('AfterResetViewComponent', () => {
  let component: AfterResetViewComponent;
  let fixture: ComponentFixture<AfterResetViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfterResetViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AfterResetViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
