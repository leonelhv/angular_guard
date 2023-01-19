import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { PostComponent } from './post/post.component';
import { FormularioComponent } from './formulario/formulario.component';
import { ComponentsModule } from '../components/components.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MainComponent } from './main/main.component';
import { RouterOutlet } from '@angular/router';

@NgModule({
  declarations: [
    LoginComponent,
    HomeComponent,
    PostComponent,
    FormularioComponent,
    MainComponent,
  ],
  imports: [CommonModule, ComponentsModule, ReactiveFormsModule, RouterOutlet],
  exports: [
    LoginComponent,
    HomeComponent,
    PostComponent,
    FormularioComponent,
    MainComponent,
  ],
})
export class PagesModule {}
