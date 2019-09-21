import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CanditateSingleComponent } from './canditate-single.component';

describe('CanditateSingleComponent', () => {
  let component: CanditateSingleComponent;
  let fixture: ComponentFixture<CanditateSingleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CanditateSingleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CanditateSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
