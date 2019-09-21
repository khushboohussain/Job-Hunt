import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleEmpComponent } from './single-emp.component';

describe('SingleEmpComponent', () => {
  let component: SingleEmpComponent;
  let fixture: ComponentFixture<SingleEmpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleEmpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleEmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
