import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarV2Component } from './navbar-v2/navbar-v2.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { SearchBarV2Component } from './search-bar-v2/search-bar-v2.component';
import { SpotifyServiceComponent } from './Service/spotify.service/spotify.service.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarV2Component,
    SearchBarComponent,
    SearchBarV2Component,
    SpotifyServiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
