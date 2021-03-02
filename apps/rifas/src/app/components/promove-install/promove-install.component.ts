import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promove-install',
  templateUrl: './promove-install.component.html',
  styleUrls: ['./promove-install.component.css'],
})
export class PromoveInstallComponent implements OnInit {
  modalView: boolean = false;
  eventPrompt: any;

  constructor() {}

  ngOnInit(): void {
    window.addEventListener('beforeinstallprompt', (event) => {
      event.preventDefault;
      this.modalView = true;
      this.eventPrompt = event;
    });
  }

  installPWA() {
    this.eventPrompt.prompt();
    this.eventPrompt.userChoice.then((choice) => {
      if (choice.outcome !== 'accepted') {
        this.modalView = false;
      }
      this.eventPrompt = null;
    });
  }

  cerrarModal() {
    this.modalView = false;
  }
}
