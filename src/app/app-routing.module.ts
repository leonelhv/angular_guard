import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { AuthenticateGuard } from './guards/authenticate.guard';
import { FormularioComponent } from './pages/formulario/formulario.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { PostComponent } from './pages/post/post.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    canActivate: [AuthenticateGuard],
  },
  {
    path: 'post',
    component: PostComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'formulario',
    component: FormularioComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard],
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
