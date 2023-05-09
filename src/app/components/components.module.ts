import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ToolbarComponent, FooterComponent, DataTableComponent } from '.';

@NgModule({
  declarations: [ToolbarComponent, FooterComponent, DataTableComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
  ],
  exports: [ToolbarComponent, FooterComponent, DataTableComponent],
})
export class ComponentsModule {}
