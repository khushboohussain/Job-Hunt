import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CanChangePasswordComponent } from './can-change-password.component';

describe('CanChangePasswordComponent', () => {
  let component: CanChangePasswordComponent;
  let fixture: ComponentFixture<CanChangePasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CanChangePasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CanChangePasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
