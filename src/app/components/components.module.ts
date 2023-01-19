import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CardComponent } from './card/card.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [HeaderComponent, CardComponent],
  imports: [CommonModule, RouterLink, RouterLinkActive, MaterialModule],
  exports: [HeaderComponent, CardComponent],
})
export class ComponentsModule {}
