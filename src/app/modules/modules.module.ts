import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthModule } from './auth/auth.module';
import { PagesModule } from './pages/pages.module';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [AuthModule, PagesModule],
})
export class ModulesModule {}
