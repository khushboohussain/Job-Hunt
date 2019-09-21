import { TestBed, async, inject } from '@angular/core/testing';

import { CandidateGuard } from './candidate.guard';

describe('CandidateGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CandidateGuard]
    });
  });

  it('should ...', inject([CandidateGuard], (guard: CandidateGuard) => {
    expect(guard).toBeTruthy();
  }));
});
