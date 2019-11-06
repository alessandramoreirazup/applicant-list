import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HeaderComponent } from './header/components/header.component';

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    BrowserModule
  ],
  exports: [
    HeaderComponent
  ],

  providers: []
})
export class AppHeaderModule { }
