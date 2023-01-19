import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { AuthenticateGuard } from './guards/authenticate.guard';
import { CanDeactiveGuard } from './guards/canDeactive.guard';
import { FormularioComponent } from './pages/formulario/formulario.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { MainComponent } from './pages/main/main.component';
import { PostComponent } from './pages/post/post.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [AuthenticateGuard],
  },
  {
    path: '',
    component: MainComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'post',
        component: PostComponent,
      },
      {
        path: 'formulario',
        component: FormularioComponent,
        canDeactivate: [CanDeactiveGuard],
      },
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: '**',
        redirectTo: 'home',
      },
    ],
  },

  {
    path: '**',
    redirectTo: 'login',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
