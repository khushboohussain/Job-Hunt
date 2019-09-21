import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CanEmpSingleComponent } from './can-emp-single.component';

describe('CanEmpSingleComponent', () => {
  let component: CanEmpSingleComponent;
  let fixture: ComponentFixture<CanEmpSingleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CanEmpSingleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CanEmpSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
