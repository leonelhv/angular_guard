import { NgModule } from '@angular/core';

import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';

const materialComponents = [
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatInputModule,
  MatFormFieldModule,
  MatTabsModule,
  MatToolbarModule,
  MatSidenavModule,
  MatRadioModule,
  MatCheckboxModule,
  MatSelectModule,
];

@NgModule({
  declarations: [],
  imports: [...materialComponents],
  exports: [...materialComponents],
})
export class MaterialModule {}
