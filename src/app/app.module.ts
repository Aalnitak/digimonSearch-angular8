import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '../modules/material-module';
import { FormsModule } from '@angular/forms';
import { AbilitiesFilterPipe } from './../pipes/abilitiesFilter.pipe';
import { SearchPipe } from './../pipes/search.pipe';
import { TypeFilterPipe } from 'src/pipes/typeFilter.pipe';
import { DigiHeaderComponent } from './components/digi-header/digi-header.component';
import { DigiHomeComponent } from './components/digi-home/digi-home.component';





@NgModule({
  declarations: [
    AppComponent,
    SearchPipe,
    TypeFilterPipe,
    AbilitiesFilterPipe,
    DigiHeaderComponent,
    DigiHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    HttpClientModule,
    MaterialModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
