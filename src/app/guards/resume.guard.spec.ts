import { TestBed, async, inject } from '@angular/core/testing';

import { ResumeGuard } from './resume.guard';

describe('ResumeGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ResumeGuard]
    });
  });

  it('should ...', inject([ResumeGuard], (guard: ResumeGuard) => {
    expect(guard).toBeTruthy();
  }));
});
