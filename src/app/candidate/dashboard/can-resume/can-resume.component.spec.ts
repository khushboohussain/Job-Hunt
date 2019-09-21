import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CanResumeComponent } from './can-resume.component';

describe('CanResumeComponent', () => {
  let component: CanResumeComponent;
  let fixture: ComponentFixture<CanResumeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CanResumeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CanResumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
