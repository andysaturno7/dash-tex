import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EnvService {
  private uriServer: string = 'https://api.tex.cr/';

  constructor() {}

  getUriSerever() {
    return this.uriServer;
  }
}
