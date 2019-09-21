import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CanSingleComponent } from './can-single.component';

describe('CanSingleComponent', () => {
  let component: CanSingleComponent;
  let fixture: ComponentFixture<CanSingleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CanSingleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CanSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
