import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CanDashSidebarComponent } from './can-dash-sidebar.component';

describe('CanDashSidebarComponent', () => {
  let component: CanDashSidebarComponent;
  let fixture: ComponentFixture<CanDashSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CanDashSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CanDashSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
