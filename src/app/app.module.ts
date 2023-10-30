import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BriefcaseModule } from './briefcase/briefcase.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BriefcaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
