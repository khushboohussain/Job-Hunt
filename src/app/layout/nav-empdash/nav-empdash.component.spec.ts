import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavEmpdashComponent } from './nav-empdash.component';

describe('NavEmpdashComponent', () => {
  let component: NavEmpdashComponent;
  let fixture: ComponentFixture<NavEmpdashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavEmpdashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavEmpdashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
