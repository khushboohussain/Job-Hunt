import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CanJobSingleComponent } from './can-job-single.component';

describe('CanJobSingleComponent', () => {
  let component: CanJobSingleComponent;
  let fixture: ComponentFixture<CanJobSingleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CanJobSingleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CanJobSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
