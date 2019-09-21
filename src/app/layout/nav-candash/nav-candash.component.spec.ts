import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavCandashComponent } from './nav-candash.component';

describe('NavCandashComponent', () => {
  let component: NavCandashComponent;
  let fixture: ComponentFixture<NavCandashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavCandashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavCandashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
