import { Component, OnInit } from '@angular/core';
import { ZoomService } from 'src/app/_services/zoom.service';

@Component({
  selector: 'registrants-reports',
  templateUrl: './registrants-reports.component.html',
  styleUrls: ['./registrants-reports.component.css'],
})
export class RegistrantsReportsComponent implements OnInit {
  public dataTable: any[] | null = null;
  public tableSpinner: boolean = false;
  constructor(private _zoom: ZoomService) {}

  ngOnInit(): void {}

  onSeeReport(data: any) {
    this.tableSpinner = true;
    this._zoom.getRegistrants(data.wm, data.wmId, data.regStatus).subscribe(
      (res: any) => {
        if (res && res.length > 0) {
          this.dataTable = res;
          this.tableSpinner = false;
        } else {
          alert('No hay datos');
          this.dataTable = null;
        }
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
