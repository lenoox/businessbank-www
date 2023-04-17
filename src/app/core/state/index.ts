import { Params } from '@angular/router';
import * as fromRouter from '@ngrx/router-store';
import { ActionReducerMap } from '@ngrx/store';
import * as fromPayments from "./payment.reducer";

export interface RouterStateUrl {
  url: string;
  queryParams: Params;
  params: Params;
}

export interface AppState {
  router: fromRouter.RouterReducerState<RouterStateUrl>;
  [fromPayments.PAYMENTS_FEATURE_KEY]: fromPayments.PaymentState;
}

export const reducers: ActionReducerMap<AppState> = {
  router: fromRouter.routerReducer,
  [fromPayments.PAYMENTS_FEATURE_KEY]: fromPayments.paymentsReducer,
};
