import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page.component';
import { HeaderComponent } from './header.component';
import { AlertModule } from 'ngx-bootstrap';
@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AlertModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent, HeaderComponent]
})
export class AppModule { }
