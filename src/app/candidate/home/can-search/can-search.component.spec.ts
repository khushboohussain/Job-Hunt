import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CanSearchComponent } from './can-search.component';

describe('CanSearchComponent', () => {
  let component: CanSearchComponent;
  let fixture: ComponentFixture<CanSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CanSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CanSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
