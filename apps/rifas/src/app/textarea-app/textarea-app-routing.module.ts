import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TextareaAppComponent } from './textarea-app.component';

const routes: Routes = [
  {path:"", component: TextareaAppComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TextareaAppRoutingModule { }
