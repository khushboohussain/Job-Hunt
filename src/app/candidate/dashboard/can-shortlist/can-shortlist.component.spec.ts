import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CanShortlistComponent } from './can-shortlist.component';

describe('CanShortlistComponent', () => {
  let component: CanShortlistComponent;
  let fixture: ComponentFixture<CanShortlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CanShortlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CanShortlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
