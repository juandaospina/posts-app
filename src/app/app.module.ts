import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LayoutComponent } from './containers/layout/layout.component';
import { PagesModule } from './pages/pages.module';
@NgModule({
  declarations: [AppComponent, LayoutComponent],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    PagesModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
