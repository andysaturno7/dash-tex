import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ConfigEnvService {
  private url_server: string = 'https://api.tex.cr';

  constructor() {}

  getUrlServer(): string {
    return this.url_server;
  }
}
