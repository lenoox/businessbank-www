import {Actions, createEffect, ofType} from "@ngrx/effects";
import * as PaymentsActions from './payment.actions';
import {Injectable} from "@angular/core";
import {catchError, exhaustMap, map, of} from "rxjs";
import {Payments} from "../models/payments.model";
import {PaymentsService} from "../services/payments.service";

@Injectable()
export class PaymentEffects {

  constructor(
    private actions$: Actions,
    private paymentsService: PaymentsService
  ) {}
  loadPayments$ = createEffect(() => this.actions$.pipe(
    ofType(PaymentsActions.loadPayments),
    exhaustMap(() =>
    this.paymentsService.getAll()
      .pipe(
        map((payments:Payments[]) => PaymentsActions.loadPaymentSuccess({ payments })),
        catchError((action, error) => of(PaymentsActions.loadPaymentFailure({ error})))
      ))
  ));

  createPayment$ = createEffect(() =>
    this.actions$.pipe(
    ofType(PaymentsActions.createPayment),
    exhaustMap((action) =>
      this.paymentsService.create(action.payments)
      .pipe(
        map((payments:Payments) => PaymentsActions.createPaymentSuccess({ payments })),
        catchError((action, error) => of(PaymentsActions.createPaymentFailure({ error})))
      ))
    )
  );
}
