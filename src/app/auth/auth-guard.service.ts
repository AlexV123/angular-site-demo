import { Injectable } from '@angular/core';
import { CanLoad, Route } from "@angular/router";
import {Store} from "@ngrx/store";
import * as fromApp from '../store/app.reducers';
import * as fromAuth from './store/auth.reducers';
import 'rxjs/add/operator/first';

@Injectable()
export class AuthGuardService implements CanLoad {

  constructor(private store: Store<fromApp.AppState>) {}

  canLoad(route: Route) {
    return this.store.select('auth').first().map((authState: fromAuth.State) => {
      return authState.authenticated;
    });
  }

}
