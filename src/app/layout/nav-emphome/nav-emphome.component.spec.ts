import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavEmphomeComponent } from './nav-emphome.component';

describe('NavEmphomeComponent', () => {
  let component: NavEmphomeComponent;
  let fixture: ComponentFixture<NavEmphomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavEmphomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavEmphomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
