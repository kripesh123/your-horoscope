import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';

import { AppComponent } from './app.component';
import {HoroscropeService} from './service/horoscrope.service';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { GeneralSignComponent } from './components/general-sign/general-sign.component';
import { GeneralAscendantComponent } from './components/general-ascendant/general-ascendant.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    FooterComponent,
    GeneralSignComponent,
    GeneralAscendantComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [HoroscropeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
