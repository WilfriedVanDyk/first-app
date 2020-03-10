import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {MaterialModule} from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule } from '@angular/forms';
import {MatTableModule} from '@angular/material/table';

import {MatGridListModule} from '@angular/material/grid-list';
import {FlexLayoutModule} from '@angular/flex-layout';

//import {CounterService} from './counter.service';
//private countService: CounterService //in de constructur van de exportclass ????

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    FormsModule,
    MatTableModule,
    MatGridListModule,
    FlexLayoutModule,
],
exports:[
  MatGridListModule,
],
// ... providers and bootstrap properties ...

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
