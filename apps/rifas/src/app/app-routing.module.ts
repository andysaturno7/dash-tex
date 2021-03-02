import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SignInComponent } from './login/sign-in/sign-in.component';
import { SignUpComponent } from './login/sign-up/sign-up.component';

const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'inicio', component: HomeComponent },
  { path: 'ingresar', component: SignInComponent },
  { path: 'registrar', component: SignUpComponent },
  {
    path: 'rifa-lista',
    loadChildren: () =>
      import('./textarea-app/textarea-app.module').then(
        (m) => m.TextareaAppModule
      ),
  },
  {
    path: 'open-chat',
    loadChildren: () =>
      import('./open-chat/open-chat.module').then((m) => m.OpenChatModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
