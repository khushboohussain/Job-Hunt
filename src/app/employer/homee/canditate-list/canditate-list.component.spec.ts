import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CanditateListComponent } from './canditate-list.component';

describe('CanditateListComponent', () => {
  let component: CanditateListComponent;
  let fixture: ComponentFixture<CanditateListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CanditateListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CanditateListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
