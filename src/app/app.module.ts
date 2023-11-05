import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BuilderModule } from '@builder.io/angular';

import { AppComponent, CustomThing } from './app.component';
import { FooComponent } from './foo.component';
import { CustomThingChildren } from './with-children';
@NgModule({
  declarations: [AppComponent, FooComponent, CustomThing, CustomThingChildren],
  entryComponents: [CustomThing, CustomThingChildren],
  imports: [
    BrowserModule,
    BuilderModule.forRoot('1f6d76dc2a2146d2b6ab914506b38e64'),
    RouterModule.forRoot([
      {
        path: '**',
        component: FooComponent,
      },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
