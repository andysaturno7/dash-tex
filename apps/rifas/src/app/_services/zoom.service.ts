import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConfigEnvService } from 'src/app/_services/config-env.service';

@Injectable({
  providedIn: 'root',
})
export class ZoomService {
  private typeSelected: string;
  private wmSelected: string;
  private wmId: number;
  constructor(private http: HttpClient, private _env: ConfigEnvService) {}

  getWM() {
    return this.http.get<any>(
      `${this._env.getUrlServer()}/zoom/${this.wmSelected}`
    );
  }

  getParticipants() {
    return this.http.get<any>(
      `${this._env.getUrlServer()}/zoom/${this.wmSelected}/${
        this.wmId
      }/participants`,
      {
        params: { type: this.typeSelected },
      }
    );
  }

  setwmSelected(wm: string) {
    this.wmSelected = wm;
  }

  setTypeSelected(type: string) {
    this.typeSelected = type;
  }

  setwmId(id: number) {
    this.wmId = id;
  }
}
