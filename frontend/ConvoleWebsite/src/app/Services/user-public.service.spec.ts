import { TestBed, inject } from '@angular/core/testing';

import { UserPublicService } from './user-public.service';

describe('UserPublicService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserPublicService]
    });
  });

  it('should be created', inject([UserPublicService], (service: UserPublicService) => {
    expect(service).toBeTruthy();
  }));
});
