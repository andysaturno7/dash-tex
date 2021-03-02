import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { ConfigService } from 'src/app/_services/textarea.service';
import { RifasService } from '../rifas.service';

@Component({
  selector: 'app-rifa',
  templateUrl: './rifa.component.html',
  styleUrls: ['./rifa.component.css'],
})
export class RifaComponent implements OnInit, OnDestroy {
  public introHeight: number = (window.innerHeight / 100) * 60;
  @Input() arrToSort: [];
  isHeaderBrand: boolean;
  introView: boolean = true;
  resultView: boolean = false;
  qty: number;
  winners: any[];
  bounceIn: string;
  @ViewChild('itemsNames') elemento: ElementRef;
  @Output() onResult = new EventEmitter<any>();
  @Output() onResultFinish = new EventEmitter<any>();
  @Output() onTimer = new EventEmitter<any>();
  @Output() arrayRejected = new EventEmitter<any>();

  constructor(private _config: ConfigService, private _rifas: RifasService) {
    _rifas.initAudio();
    this.isHeaderBrand = _config.getConfig().isHeaderBrand;
    this.qty = _config.getConfig().qty
  }

  ngOnInit() {}

  ngOnDestroy() {
    this._rifas.pauseTensorAudio();
  }

  sortear(seconds: number) {    
    this._rifas.pauseTensorAudio();
    if (this.arrToSort.length < 2 || this.arrToSort.length < this.qty) {
      this.arrayRejected.emit({ message: 'No hay suficientes elementos' });
      return false;
    } else {
      this.winners = [];
      this.resultView = false;
      this._rifas.endedCountdownAudio();
      this.onTimer.emit();
      this.introView = false;
      for (let i = 0; i < this._config.getConfig().qty; i++) {
        let winner = this._rifas.sorteo(this.arrToSort);
        this.winners.push(winner);
        if(this._config.getConfig().deleteWinner){
          this.arrToSort.splice(winner.index, 1)
        }
      }   
      setTimeout((): void => {
        this.resultView = true;
        this.onResult.emit();    
      }, seconds * 1000);
    }
    console.log(this.qty, this._config.getConfig().qty);
    
  }

  back(seconds?: number) {
    this.onResultFinish.emit();
    if (this._config.getConfig().sortAgain) {
      this.sortear(seconds);
    } else {
      this._rifas.playTensorAudio();
      this.resultView = false;
      this.introView = true;
    }
  }

  deleteElements(arr: any[], index: number) {
    var newline = '\n';
    var string = '';
    arr.splice(index, 1);
    
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].length > 0) {
        if (arr.length == i + 1) {
          string += arr[i];
        } else {
          string += arr[i] + newline;
        }
      }
    }
  }
}
