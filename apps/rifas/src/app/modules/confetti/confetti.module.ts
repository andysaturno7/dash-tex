import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfettiComponent } from './confetti.component';
import { ConfigConfettiComponent } from './config-confetti/config-confetti.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ConfettiComponent, ConfigConfettiComponent],
  imports: [CommonModule, FormsModule],
  exports: [ConfettiComponent, ConfigConfettiComponent],
})
export class ConfettiModule {}
