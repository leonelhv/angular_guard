import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { PostComponent } from './post/post.component';
import { FormularioComponent } from './formulario/formulario.component';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  declarations: [
    LoginComponent,
    HomeComponent,
    PostComponent,
    FormularioComponent,
  ],
  imports: [CommonModule, ComponentsModule],
  exports: [LoginComponent, HomeComponent, PostComponent, FormularioComponent],
})
export class PagesModule {}
