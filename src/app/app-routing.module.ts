import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FetchQuoteComponent } from './fetch-quote/fetch-quote.component'

const routes: Routes = [
  {
    path: '',
    component: FetchQuoteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
