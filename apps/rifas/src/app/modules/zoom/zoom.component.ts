import { Component, OnInit } from '@angular/core';
import { ZoomService } from '../../_services/zoom.service';

@Component({
  selector: 'app-zoom',
  templateUrl: './zoom.component.html',
  styleUrls: ['./zoom.component.css'],
})
export class ZoomComponent implements OnInit {
  public listWM: any;
  public Participants: any;

  constructor(private _zoom: ZoomService) {}

  ngOnInit(): void {}

  getWM() {
    this._zoom.getWM().subscribe(
      (res) => {
        this.listWM = res.webinars;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getLiveParticipants() {
    this._zoom.getParticipants().subscribe(
      (res) => {
        console.log(res);

        this.Participants = res;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
