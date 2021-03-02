import { TestBed } from '@angular/core/testing';

import { ConfettiSettingsService } from './confetti-settings.service';

describe('ConfettiSettingsService', () => {
  let service: ConfettiSettingsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConfettiSettingsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
