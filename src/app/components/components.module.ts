import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DataTableComponent, CardInfoComponent } from '.';

@NgModule({
  declarations: [
    DataTableComponent,
    CardInfoComponent,
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
  ],
  exports: [
    DataTableComponent,
    CardInfoComponent,
  ],
})
export class ComponentsModule {}
