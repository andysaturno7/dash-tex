import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  public name: string;
  public password: string;
  public mail: string;

  constructor() {}

  ngOnInit(): void {}

  show() {}
}
