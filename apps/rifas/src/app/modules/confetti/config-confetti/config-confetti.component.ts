import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {
  DomSanitizer,
  SafeResourceUrl,
  SafeUrl,
} from '@angular/platform-browser';
import { ConfettiSettingsService } from '../confetti-settings.service';
import { ConfettiSettings } from '../ConfettiSettings';
import { SVG } from '../svg';

@Component({
  selector: 'config-confetti',
  templateUrl: './config-confetti.component.html',
  styleUrls: ['./config-confetti.component.css'],
})
export class ConfigConfettiComponent implements OnInit {
  public confettiSettings: ConfettiSettings;
  public props: string[] | SVG[];
  public init_props: any[];
  public numberOne: number = 5;
  public triangle: any;
  public square: any;
  public line: any;
  public circle: any;
  public svg: boolean;
  public SVG: SVG = {
    type: 'svg',
    src: '/assets/img/descargar.svg',
    size: 25,
    weight: 0.2,
  };
  public ImageUrl: any = null;
  public isImage: boolean = false;

  @Output() onDone = new EventEmitter<ConfettiSettings>();

  constructor(
    private _settings: ConfettiSettingsService,
    private sanitize: DomSanitizer
  ) {
    this.confettiSettings = _settings.getSettings();
  }

  ngOnInit(): void {
    window.onresize = () => {
      this.confettiSettings.width = window.innerWidth;
      this.confettiSettings.height = window.innerHeight;
      this.updateSettings();
    };
  }

  emitSettings() {
    this.updateSettings();
    this.onDone.emit(this.confettiSettings);
  }

  updateSettings() {
    this.setProps();
    this._settings.updateSettings(this.confettiSettings);
  }

  setProps() {
    let arr = ['triangle', 'square', 'circle', 'line'];
    if (this.svg) {
      this.confettiSettings.props = [...arr, this.SVG];
    } else {
      this.confettiSettings.props = [...arr];
    }
  }

  async handleChangeImage(event) {
    if (event.files) {
      var reader = new FileReader();
      reader.readAsDataURL(event.files[0]);

      reader.onload = (_event) => {
        console.log(_event);
        this.ImageUrl = this.sanitize.bypassSecurityTrustUrl(
          reader.result as string
        );
        this.isImage = true;
      };

      // reader.onloadend = (_event) => {
      //   let url = this.sanitize.bypassSecurityTrustUrl(
      //     `url(${_event.target.result})`
      //   );
      //   this.ImageUrl = url;
      //   this.isImage = true;
      // };
    }
  }

  log(ev) {
    console.log(ev);
  }
}
