import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {StockData} from './stock-data';
import {StockService} from './stock.service';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { NgZone } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';
  dataset:any;
  id:any;
  constructor(private stockService:StockService, private zone:NgZone){}

  private stockData:StockData[];

  ngOnInit(){
    this.stockService.getStock().subscribe((stockData)=>{
      console.log(stockData);
      this.stockData = stockData;
      console.log(this.stockData);
    },(error)=>{
      console.log(error);
    })
  }

}
