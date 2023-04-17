import {createFeatureSelector, createSelector} from "@ngrx/store";
import { paymentsAdapter, PaymentState, PAYMENTS_FEATURE_KEY } from './payment.reducer';


export const getPaymentState = createFeatureSelector<PaymentState>(
  PAYMENTS_FEATURE_KEY
)

const { selectAll, selectEntities } = paymentsAdapter.getSelectors();
export const getAllPayments = createSelector(
  getPaymentState,
  (state: PaymentState) => selectAll(state)
);
