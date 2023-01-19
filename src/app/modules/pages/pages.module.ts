import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { PostComponent } from './post/post.component';
import { FormularioComponent } from './formulario/formulario.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MainComponent } from './main/main.component';
import { RouterOutlet } from '@angular/router';
import { PagesRoutingModule } from './pages-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  declarations: [
    HomeComponent,
    PostComponent,
    FormularioComponent,
    MainComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    ReactiveFormsModule,
    RouterOutlet,
    ComponentsModule,
  ],
  exports: [MainComponent],
})
export class PagesModule {}
