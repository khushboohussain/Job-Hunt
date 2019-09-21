import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavCanhomeComponent } from './nav-canhome.component';

describe('NavCanhomeComponent', () => {
  let component: NavCanhomeComponent;
  let fixture: ComponentFixture<NavCanhomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavCanhomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavCanhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
