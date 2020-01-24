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
  constructor(private nodeStockService: NodeStockService) { }

  ngOnInit() {
    this.symbol = 'NTPC';
    this.exchange = 'NSE';
    this.getStockQuote();
  }

  private logIt(message) {
    return console.log(message)
  }

  private getStockQuote = () => {
    if (this.symbol == '') {
      alert('Symbol cannot be empty');
    }
    else {
      let quote;
      this.nodeStockService.getQuote(this.exchange, this.symbol)
        .subscribe(
          data => {
            quote = data
          },
          err => {
            this.logIt('Error: ' + err)
          },
          () => {
            this.logIt(`Quote: ${JSON.stringify(quote)}`)
          }
        )
    }
  }

}
