import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent implements OnInit {
  public mail: string;
  public password: string;
  constructor() {}

  ngOnInit(): void {}

  show(e) {
    console.log(this.mail, this.password);
  }
}
