import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OpenChatComponent } from './open-chat.component';

const routes: Routes = [{ path: '', component: OpenChatComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OpenChatRoutingModule {}
