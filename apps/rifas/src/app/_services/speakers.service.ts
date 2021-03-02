import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigEnvService } from './config-env.service';

@Injectable({
  providedIn: 'root',
})
export class SpeakersService {
  constructor(private http: HttpClient, private _env: ConfigEnvService) {}

  getSpeakers() {
    return this.http.get<any>(`${this._env.getUrlServer()}/conferencistas`);
  }
}
