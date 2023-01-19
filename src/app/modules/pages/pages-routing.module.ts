import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanDeactiveGuard } from 'src/app/guards/canDeactive.guard';
import { FormularioComponent } from './formulario/formulario.component';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './main/main.component';
import { PostComponent } from './post/post.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
