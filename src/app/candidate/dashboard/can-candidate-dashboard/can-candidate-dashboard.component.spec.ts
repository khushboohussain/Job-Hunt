import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CanCandidateDashboardComponent } from './can-candidate-dashboard.component';

describe('CanCandidateDashboardComponent', () => {
  let component: CanCandidateDashboardComponent;
  let fixture: ComponentFixture<CanCandidateDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CanCandidateDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CanCandidateDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
