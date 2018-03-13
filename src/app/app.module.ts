import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';

import { StockService } from './stock.service';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpModule],
  providers: [StockService],
  bootstrap: [AppComponent]
})
export class AppModule { }
