import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CanProSearchComponent } from './can-pro-search.component';

describe('CanProSearchComponent', () => {
  let component: CanProSearchComponent;
  let fixture: ComponentFixture<CanProSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CanProSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CanProSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
