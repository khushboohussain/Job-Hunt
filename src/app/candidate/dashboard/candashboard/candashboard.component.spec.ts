import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CandashboardComponent } from './candashboard.component';

describe('CandashboardComponent', () => {
  let component: CandashboardComponent;
  let fixture: ComponentFixture<CandashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CandashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CandashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
