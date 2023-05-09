import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { ToolbarComponent, FooterComponent, DataTableComponent } from '.';

@NgModule({
  declarations: [ToolbarComponent, FooterComponent, DataTableComponent],
  imports: [CommonModule, MatTableModule, MatPaginatorModule, BrowserAnimationsModule],
  exports: [ToolbarComponent, FooterComponent, DataTableComponent],
})
export class ComponentsModule {}
