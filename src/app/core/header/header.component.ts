import {Component, OnInit} from '@angular/core';
import {DataStorageService} from "../../shared/data-storage.service";
import {AuthService} from "../../auth/auth.service";
import {Store} from "@ngrx/store";
import * as fromApp from '../../store/app.reducers';
import * as fromAuth from '../../auth/store/auth.reducers';
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit{

  authState: Observable<fromAuth.State>;

  constructor(
    private dataStorageService: DataStorageService,
    public authService: AuthService,
    private store: Store<fromApp.AppState>) {}

  ngOnInit() {
    this.authState = this.store.select('auth');
  }

  onSaveData() {
    this.dataStorageService.storeRecipes().subscribe();
  }

  onFetchData() {
    this.dataStorageService.getRecipes();
  }

  onLogout() {
    this.authService.logout();
  }
}
