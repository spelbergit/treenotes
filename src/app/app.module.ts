import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {NotenbalkComponent} from './notenbalk/notenbalk.component';
import {OsmdRendererModule} from "osmd-angular";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    NotenbalkComponent
  ],
  imports: [
    BrowserModule,
    OsmdRendererModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
