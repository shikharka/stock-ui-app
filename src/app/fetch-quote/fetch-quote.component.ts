import { Component, OnInit } from '@angular/core';

import { NodeStockService } from '../node-stock.service';

@Component({
  selector: 'app-fetch-quote',
  templateUrl: './fetch-quote.component.html',
  styleUrls: ['./fetch-quote.component.css']
})
export class FetchQuoteComponent implements OnInit {
  symbol: string
  exchange: string
  quotes: {
    close: any,
    volume: any,
    open: any,
    prevClose: any,
    avgVolume3Months: any,
    marketCap: any,
    monthly5Years: any,
    peRatio: any,
    epsRatio: any
  }
  constructor(private nodeStockService: NodeStockService) { }

  ngOnInit() {
    this.exchange = 'NSE';
    this.quotes = {
      close: 0,
      volume: 0,
      open: 0,
      prevClose: 0,
      avgVolume3Months: 0,
      marketCap: 0,
      monthly5Years: 0,
      peRatio: 0,
      epsRatio: 0
    }
  }

  private logIt(message) {
    return console.log(message)
  }

  private getStockQuote = () => {
    if (this.symbol == '') {
      alert('Symbol cannot be empty');
    }
    else {
      this.quotes = {
        close: 0,
        volume: 0,
        open: 0,
        prevClose: 0,
        avgVolume3Months: 0,
        marketCap: 0,
        monthly5Years: 0,
        peRatio: 0,
        epsRatio: 0
      }
      let quote;
      this.nodeStockService.getQuote(this.exchange, this.symbol.toUpperCase())
        .subscribe(
          data => {
            quote = data
          },
          err => {
            this.logIt('Error: ' + err)
          },
          () => {
            // this.logIt(`Quote: ${JSON.stringify(quote)}`)
            this.quotes = quote
          }
        )
    }
  }

}
