import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpDashSidebarComponent } from './emp-dash-sidebar.component';

describe('EmpDashSidebarComponent', () => {
  let component: EmpDashSidebarComponent;
  let fixture: ComponentFixture<EmpDashSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpDashSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpDashSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
