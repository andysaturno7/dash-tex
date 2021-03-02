import { Injectable } from '@angular/core';
import { TextAreaSettings } from '../textarea-app/config/Settings';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  private config: TextAreaSettings = {
    deleteWinner: true,
    sortAgain: false,
    isHeaderBrand: false,
    linkBrand: '',
    qty: 1
  };

  constructor() {}

  getConfig() {
    return this.config;
  }

  updateConfig(object: TextAreaSettings) {
    this.config = object;
    return this.config;
  }
}
