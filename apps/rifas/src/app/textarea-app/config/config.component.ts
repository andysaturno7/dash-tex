import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/_services/textarea.service';
import { TextAreaSettings } from './Settings';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css'],
})
export class ConfigComponent implements OnInit {
  public Settings: TextAreaSettings = this._config.getConfig();

  constructor(private _config: ConfigService) {}

  ngOnInit(): void {}

  updateSetiings() {
    this._config.updateConfig(this.Settings);
  }
}
