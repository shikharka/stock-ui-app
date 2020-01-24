import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NodeStockService {

  private url = 'http://localhost:8888'

  constructor(private http: HttpClient) { }

  private log(message) {
    return console.log(message)
  }

  // GET
  getQuote(exchange: string, symbol: string) {
    this.url = `${this.url}/getQuote?exchange=${exchange}&symbol=${symbol}`
    this.log(this.url)
    return this.http.get(this.url)
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      )
  }


  errorHandl(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}
