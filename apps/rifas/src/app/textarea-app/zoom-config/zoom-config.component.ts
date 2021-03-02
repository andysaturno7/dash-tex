import { Component, OnInit } from '@angular/core';
import { ZoomService } from 'src/app/_services/zoom.service';

@Component({
  selector: 'zoom-config',
  templateUrl: './zoom-config.component.html',
  styleUrls: ['./zoom-config.component.css'],
})
export class ZoomConfigComponent implements OnInit {
  public wmSelected: string;
  public typeSelected: string;
  public wmId: number;

  constructor(private _zoom: ZoomService) {}

  ngOnInit(): void {}

  setwmId() {
    this._zoom.setwmId(this.wmId);
  }

  setwmSelected() {
    this._zoom.setwmSelected(this.wmSelected);
  }

  setTypeSelected() {
    this._zoom.setTypeSelected(this.typeSelected);
  }
}
