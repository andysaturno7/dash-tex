import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EnvService } from './env.service';

@Injectable({
  providedIn: 'root',
})
export class ZoomService {
  uri: string = this._env.getUriSerever();

  constructor(private http: HttpClient, private _env: EnvService) {}

  getRegistrants(wm: string, wmId: number, status: string) {
    return this.http.get(`${this.uri}zoom/${wm}/${wmId}/registrants/${status}`);
  }
}
