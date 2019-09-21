import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CanJobListComponent } from './can-job-list.component';

describe('CanJobListComponent', () => {
  let component: CanJobListComponent;
  let fixture: ComponentFixture<CanJobListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CanJobListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CanJobListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
