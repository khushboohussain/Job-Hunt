import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeGenerateComponent } from './resume-generate.component';

describe('ResumeGenerateComponent', () => {
  let component: ResumeGenerateComponent;
  let fixture: ComponentFixture<ResumeGenerateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResumeGenerateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeGenerateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
