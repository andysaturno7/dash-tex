import { Component, Input, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/_services/textarea.service';

@Component({
  selector: 'header-brand',
  templateUrl: './header-brand.component.html',
  styleUrls: ['./header-brand.component.css']
})
export class HeaderBrandComponent implements OnInit {

  link: string;

  constructor(private _config: ConfigService) {
    this.link = _config.getConfig().linkBrand
   }

  ngOnInit(): void {
  }

}
