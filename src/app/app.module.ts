import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {PRIMENG_MODULE} from "./primeng.module";
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import {CoreModule} from "./core/core.module";
import {reducers} from "./core/state";
import {PaymentEffects} from "./core/state/payment.effects";
import {PaymentFacade} from "./core/state/payment.facade";
const STORE_NAME = 'businessbank-store';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PRIMENG_MODULE,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([PaymentEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, name: STORE_NAME,logOnly: !isDevMode() }),
    StoreRouterConnectingModule.forRoot({ stateKey: 'router' }),
    CoreModule
  ],
  providers: [PaymentFacade],
  bootstrap: [AppComponent]
})
export class AppModule { }
