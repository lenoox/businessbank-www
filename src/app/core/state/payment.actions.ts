import {createAction, props} from "@ngrx/store";
import {Payments} from "../models/payments.model";

export const loadPayments = createAction('[Payments] Load Payment');
export const loadPaymentSuccess = createAction(
  '[Payments] Load Payment Success',
  props<{payments: Payments[]}>()
)
export const loadPaymentFailure = createAction(
  '[Payments] Load Payment Failure',
  props<{ error: any }>()
)

export const createPayment = createAction(
  '[Payments] Create Payment',
  props<{payments: Payments}>()
)
export const createPaymentSuccess = createAction(
  '[Payments] Create Payment Success',
  props<{payments: Payments}>()
)
export const createPaymentFailure = createAction(
  '[Payments] Create Payment Failure',
  props<{ error: any }>()
)
