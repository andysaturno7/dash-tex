import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../_services/textarea.service';
import { ZoomService } from '../_services/zoom.service';

@Component({
  selector: 'app-textarea-app',
  templateUrl: './textarea-app.component.html',
  styleUrls: ['./textarea-app.component.css'],
})
export class TextareaAppComponent implements OnInit {
  public WMSelected;
  private arrayToSort: any[] = [];
  public inputView: boolean = true;
  public rifaView: boolean = false;
  public confetti: boolean = false;
  public isvisible: string = '';
  public toggleConfig: boolean;
  public isCollapsed = true;
  public timer: boolean = false;
  constructor(private _config: ConfigService, private _zoom: ZoomService) {}

  ngOnInit(): void {}

  log() {
    console.log(this.WMSelected);
  }

  onInputReady(arr: any[]) {
    this.arrayToSort = arr;
    this.inputView = false;
    this.rifaView = true;
  }

  onZoomSelected() {
    this._zoom.getParticipants().subscribe(
      (res) => {
        for (let index = 0; index < res.length; index++) {
          const element = res[index];
          this.arrayToSort.push(element.user_name);
        }

        this.inputView = false;
        this.rifaView = true;
      },
      (err) => {
        alert(err.message);
      }
    );
  }

  onArrayRejected(obj: any) {
    alert(obj.message);
    this.inputView = true;
    this.rifaView = false;
  }

  onToggleConfig() {
    if (this.toggleConfig) {
      this.isvisible = 'isvisible';
    } else this.isvisible = '';
  }
}
