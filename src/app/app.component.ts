import {Component, OnInit} from '@angular/core';
import {PaymentFacade} from "./core/state/payment.facade";
import {Payments} from "./core/models/payments.model";
import {Observable} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  allPayments$: Observable<Payments[]> = this.paymentFacade.allPayments$;
  title = 'businessbank';
  constructor(private paymentFacade: PaymentFacade) {}
  saveWidget() {
    this.paymentFacade.createPayment({
      fromAccountNumber: '200300400',
      toAccountNumber: '300400500',
      value: 15564,
      currency: 'PLN'
    });
  }
  loadPayments() {
    this.paymentFacade.loadPayments();
  }
  ngOnInit(): void {
    this.paymentFacade.mutations$.subscribe((_) => console.log(4))
    this.loadPayments();
  }
}
