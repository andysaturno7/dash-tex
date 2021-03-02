import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { ConfettiSettingsService } from './confetti-settings.service';
import { ConfettiSettings } from './ConfettiSettings';
declare var ConfettiGenerator: any;
@Component({
  selector: 'app-confetti',
  templateUrl: './confetti.component.html',
  styleUrls: ['./confetti.component.css'],
})
export class ConfettiComponent implements OnInit, OnDestroy {
  private confettiSettings: ConfettiSettings;
  private confetti: any;

  constructor(private _settings: ConfettiSettingsService) {}

  ngOnInit(): void {
    this.confettiRender(this._settings.getSettings());
  }

  confettiRender(settings: ConfettiSettings) {
    this.confetti = new ConfettiGenerator(settings);
    this.confetti.render();
  }

  async applySettings(settings: ConfettiSettings) {
    await this.confettiClear();
    await this._settings.updateSettings(settings);
    this.confettiRender(this._settings.getSettings());
  }

  confettiClear() {
    return this.confetti.clear();
  }

  ngOnDestroy() {
    this.confettiClear();
  }
}
