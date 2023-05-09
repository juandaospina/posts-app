import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { ComponentsModule } from '../components/components.module';
import { HomeComponent } from './home/home.component';
import { AddPostComponent } from './add-post/add-post.component';

@NgModule({
  declarations: [HomeComponent, AddPostComponent],
  imports: [CommonModule, ComponentsModule, FormsModule, MatSnackBarModule],
})
export class PagesModule {}
