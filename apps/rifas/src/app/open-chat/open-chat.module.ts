import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OpenChatRoutingModule } from './open-chat-routing.module';
import { OpenChatComponent } from './open-chat.component';


@NgModule({
  declarations: [OpenChatComponent],
  imports: [
    CommonModule,
    OpenChatRoutingModule
  ]
})
export class OpenChatModule { }
