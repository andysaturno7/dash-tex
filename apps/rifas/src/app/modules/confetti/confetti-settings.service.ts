import { Injectable } from '@angular/core';
import { ConfettiSettings } from './ConfettiSettings';

@Injectable({
  providedIn: 'root',
})
export class ConfettiSettingsService {
  private confettiSettings: ConfettiSettings;

  constructor() {
    this.confettiSettings = {
      target: 'confetti-holder',
      max: 80,
      size: 1,
      animate: true,
      props: [
        'circle',
        'square',
        'triangle',
        'line',
        {
          type: 'svg',
          src: '',
          size: 25,
          weight: 0.2,
        },
      ],
      colors: [
        [165, 104, 246],
        [230, 61, 135],
        [0, 199, 228],
        [253, 214, 126],
      ],
      clock: 25,
      rotate: false,
      width: window.innerWidth,
      height: window.innerHeight,
      start_from_edge: true,
      respawn: true,
    };
  }

  getSettings() {
    return this.confettiSettings;
  }

  async updateSettings(settings: object) {
    return (this.confettiSettings = settings);
  }
}
