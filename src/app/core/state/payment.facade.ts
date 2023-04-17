import {Injectable} from "@angular/core";
import {Action, ActionsSubject, select, Store} from "@ngrx/store";
import {Payments} from "../models/payments.model";
import * as PaymentsActions from './payment.actions';
import * as PaymentsSelectors from './payment.selectors';
import {filter} from "rxjs";

@Injectable()
export class PaymentFacade {
  allPayments$ = this.store.pipe(select(PaymentsSelectors.getAllPayments));
  mutations$ = this.actions$.pipe(
    filter((action: Action) =>
      action.type === PaymentsActions.createPayment({} as any).type
    )
  );
  constructor(private store:Store, private actions$: ActionsSubject) {
  }
  createPayment(payments:Payments){
    this.dispatch(PaymentsActions.createPayment({payments}))
  }
  loadPayments() {
    this.dispatch(PaymentsActions.loadPayments());
  }
  dispatch(action: Action) {
    this.store.dispatch(action);
  }
}

