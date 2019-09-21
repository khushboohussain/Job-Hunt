import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CanCandidateHomeComponent } from './can-candidate-home.component';

describe('CanCandidateHomeComponent', () => {
  let component: CanCandidateHomeComponent;
  let fixture: ComponentFixture<CanCandidateHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CanCandidateHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CanCandidateHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
