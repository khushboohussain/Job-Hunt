import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CanListComponent } from './can-list.component';

describe('CanListComponent', () => {
  let component: CanListComponent;
  let fixture: ComponentFixture<CanListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CanListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CanListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
