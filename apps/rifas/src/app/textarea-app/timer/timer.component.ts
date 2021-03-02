import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { RifasService } from '../rifas.service';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css'],
})
export class TimerComponent implements OnInit {
  count: number;
  @Output() onFinish = new EventEmitter();

  constructor(private _rifas: RifasService) {}

  ngOnInit(): void {
    this.start(3);
    this._rifas.initCountdownAudio();
  }

  start(n: number) {
    this.count = n;
    n--;
    var interval = setInterval(() => {
      if (n > 0) {
        this.count = n;
        n--;
      } else {
        this.onFinish.emit();
        clearInterval(interval);
        return false;
      }
    }, 1000);
  }
}
