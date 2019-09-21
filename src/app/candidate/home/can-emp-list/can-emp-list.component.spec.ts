import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CanEmpListComponent } from './can-emp-list.component';

describe('CanEmpListComponent', () => {
  let component: CanEmpListComponent;
  let fixture: ComponentFixture<CanEmpListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CanEmpListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CanEmpListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
