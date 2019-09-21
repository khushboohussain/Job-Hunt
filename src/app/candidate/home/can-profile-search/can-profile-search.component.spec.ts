import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CanProfileSearchComponent } from './can-profile-search.component';

describe('CanProfileSearchComponent', () => {
  let component: CanProfileSearchComponent;
  let fixture: ComponentFixture<CanProfileSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CanProfileSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CanProfileSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
