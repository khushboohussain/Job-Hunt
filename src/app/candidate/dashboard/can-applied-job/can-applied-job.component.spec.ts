import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CanAppliedJobComponent } from './can-applied-job.component';

describe('CanAppliedJobComponent', () => {
  let component: CanAppliedJobComponent;
  let fixture: ComponentFixture<CanAppliedJobComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CanAppliedJobComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CanAppliedJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
