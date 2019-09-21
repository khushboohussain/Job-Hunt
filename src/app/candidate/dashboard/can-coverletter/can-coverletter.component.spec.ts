import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CanCoverletterComponent } from './can-coverletter.component';

describe('CanCoverletterComponent', () => {
  let component: CanCoverletterComponent;
  let fixture: ComponentFixture<CanCoverletterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CanCoverletterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CanCoverletterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
