import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CanResumeAddNewComponent } from './can-resume-add-new.component';

describe('CanResumeAddNewComponent', () => {
  let component: CanResumeAddNewComponent;
  let fixture: ComponentFixture<CanResumeAddNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CanResumeAddNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CanResumeAddNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
