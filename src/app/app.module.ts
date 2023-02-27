import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PaginatorComponent } from './paginator/paginator.component';
import { PageButtonComponent } from './paginator/page-button/page-button.component';

@NgModule({
  declarations: [
    AppComponent,
    PaginatorComponent,
    PageButtonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
