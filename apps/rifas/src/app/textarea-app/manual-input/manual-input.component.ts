import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { ZoomService } from 'src/app/_services/zoom.service';
import { RifasService } from '../rifas.service';

@Component({
  selector: 'manual-input',
  templateUrl: './manual-input.component.html',
  styleUrls: ['./manual-input.component.css'],
})
export class ManualInputComponent implements OnInit {
  public textareaHeight: number = 260;
  @Output() onInputReady = new EventEmitter<any[]>();
  @Output() zoomSelected = new EventEmitter<any>();
  public textareaValues: string = '';
  public zoomArray: any[];
  @ViewChild('itemsNames') elemento: ElementRef;
  constructor(private _rifas: RifasService, private _zoom: ZoomService) {}

  ngOnInit(): void {}

  emitArray(arr: any[]) {
    if (arr.length > 1) {
      this.onInputReady.emit(arr);
    } else {
      alert('No hay suficientes elementos para sortear');
      return false;
    }
  }

  textareaToArray() {
    let arrToSort = this._rifas.stringToArray(this.textareaValues);

    if (arrToSort.length < 2) {
      this.elemento.nativeElement.focus();
      return arrToSort;
    }
    return arrToSort;
  }

  onZoomSelected() {
    this.zoomSelected.emit();
  }
}
