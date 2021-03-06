import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css'],
})
export class DashComponent {
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Card 1', cols: 1, rows: 1, content: 'app-table' },
          { title: 'Card 2', cols: 1, rows: 1, content: 'app-table' },
          { title: 'Card 3', cols: 1, rows: 1, content: 'app-table' },
          { title: 'Card 4', cols: 1, rows: 1, content: 'app-table' },
        ];
      }

      return [
        { title: 'Card 1', cols: 2, rows: 1, content: 'app-table' },
        { title: 'Card 2', cols: 1, rows: 1, content: 'app-table' },
        { title: 'Card 3', cols: 1, rows: 2, content: 'app-table' },
        { title: 'Card 4', cols: 1, rows: 1, content: 'app-table' },
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {}

  goFullScreen(ev: any) {
    console.log(ev);
  }
}
