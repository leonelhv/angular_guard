import { NgModule } from '@angular/core';

import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';

const materialComponents = [
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatInputModule,
  MatFormFieldModule,
  MatSnackBarModule,
  MatTabsModule,
];

@NgModule({
  declarations: [],
  imports: [...materialComponents],
  exports: [...materialComponents],
})
export class MaterialModule {}
