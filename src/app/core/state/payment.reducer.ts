import {Action, createReducer, on} from "@ngrx/store";
import * as PaymentsActions from './payment.actions';
import {Payments} from "../models/payments.model";
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';

export const PAYMENTS_FEATURE_KEY = 'payments';

export interface WidgetsPartialState {
  readonly [PAYMENTS_FEATURE_KEY]: PaymentState;
}
export const paymentsAdapter: EntityAdapter<Payments> = createEntityAdapter();
const onFailure = (state: any, {error}: any) => ({ ...state, error });

export interface PaymentState extends EntityState<Payments> {
  selectedId?: string | number;
  loaded: boolean;
  error?: string | null;
}
export const initialPaymentsState: PaymentState = paymentsAdapter.getInitialState(
  {
    loaded: false,
  }
);
const _paymentsReducer = createReducer(
  initialPaymentsState,
  on(PaymentsActions.loadPayments, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(PaymentsActions.loadPaymentSuccess, (state, { payments }) =>
    paymentsAdapter.setAll(payments, { ...state, loaded: true })
  ),
  on(PaymentsActions.loadPaymentFailure, onFailure),

  on(PaymentsActions.createPaymentSuccess, (state, { payments })=>
    paymentsAdapter.addOne(payments,state)
  ),
  on(PaymentsActions.createPaymentFailure, onFailure),
)
export function paymentsReducer(
  state: PaymentState | undefined,
  action: Action
) {
  return _paymentsReducer(state, action);
}
