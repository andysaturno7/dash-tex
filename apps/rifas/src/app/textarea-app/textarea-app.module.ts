import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TextareaAppRoutingModule } from './textarea-app-routing.module';
import { TextareaAppComponent } from './textarea-app.component';
import { RifaComponent } from './rifa/rifa.component';
import { ConfigComponent } from './config/config.component';
import { ConfettiModule } from '../modules/confetti/confetti.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ZoomModule } from '../modules/zoom/zoom.module';
import { TimerComponent } from './timer/timer.component';
import { ManualInputComponent } from './manual-input/manual-input.component';
import { ZoomConfigComponent } from './zoom-config/zoom-config.component';
import { HeaderBrandComponent } from './header-brand/header-brand.component';

@NgModule({
  declarations: [TextareaAppComponent, RifaComponent, ConfigComponent, TimerComponent, ManualInputComponent, ZoomConfigComponent, HeaderBrandComponent],
  imports: [
    CommonModule,
    TextareaAppRoutingModule,
    FormsModule,
    ConfettiModule,
    NgbModule,
    ZoomModule,
  ],
})
export class TextareaAppModule {}
