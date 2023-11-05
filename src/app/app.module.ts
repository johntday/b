import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { BuilderModule } from '@builder.io/angular'; // <-- import here

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule,
    BuilderModule.forRoot('1f6d76dc2a2146d2b6ab914506b38e64'), // <-- import here
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }

