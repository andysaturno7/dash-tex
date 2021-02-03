import {
  AfterViewInit,
  Component,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'table-reports',
  templateUrl: './table-reports.component.html',
  styleUrls: ['./table-reports.component.css'],
})
export class TableReportsComponent implements OnInit, AfterViewInit {
  public dataSource: any;
  @Input() tableData: any;

  displayedColumns: string[] = [
    'first_name',
    'last_name',
    'email',
    'status',
    'link',
  ];

  @ViewChild(MatPaginator) paginator: any;
  @ViewChild(MatSort) sort: any;

  constructor() {}

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.tableData);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
