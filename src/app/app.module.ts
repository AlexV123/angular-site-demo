import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {AppRoutingModule} from "./app-routing.module";

import {SharedModule} from "./shared/shared.module";
import {AuthModule} from "./auth/auth.module";
import {CoreModule} from "./core/core.module";
import {HttpClientModule} from '@angular/common/http';
import {StoreModule} from "@ngrx/store";
import { reducers } from './store/app.reducers';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    AuthModule,
    CoreModule,
    StoreModule.forRoot(reducers)
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
