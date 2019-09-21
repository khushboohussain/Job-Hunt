import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CanProfileComponent } from './can-profile.component';

describe('CanProfileComponent', () => {
  let component: CanProfileComponent;
  let fixture: ComponentFixture<CanProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CanProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CanProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
