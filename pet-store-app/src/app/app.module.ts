import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreNavComponent } from './store-nav/store-nav.component';
import { AdminNavComponent } from './admin-nav/admin-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    StoreNavComponent,
    AdminNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
