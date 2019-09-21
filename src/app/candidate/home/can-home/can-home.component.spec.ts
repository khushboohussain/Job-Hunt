import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CanHomeComponent } from './can-home.component';

describe('CanHomeComponent', () => {
  let component: CanHomeComponent;
  let fixture: ComponentFixture<CanHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CanHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CanHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
