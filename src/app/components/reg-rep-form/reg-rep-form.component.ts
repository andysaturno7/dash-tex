import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'reg-rep-form',
  templateUrl: './reg-rep-form.component.html',
  styleUrls: ['./reg-rep-form.component.css'],
})
export class RegRepFormComponent implements OnInit {
  public regRepForm = this.fb.group({
    wm: [null, Validators.required],
    wmId: [null, Validators.required],
    regStatus: [null, Validators.required],
  });

  public WM: any[] = [
    { name: 'Seminario', value: 'webinars' },
    { name: 'Reunión', value: 'meetings' },
  ];
  public Status: any[] = [
    { name: 'Aprobado', value: 'approved' },
    { name: 'Pendiente', value: 'pending' },
    { name: 'Denegado', value: 'denied' },
  ];

  @Output() formReady = new EventEmitter();

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  onSubmit() {
    this.formReady.emit(this.regRepForm.value);
  }
}
