import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ShoppingEditComponent} from "./shopping-edit/shopping-edit.component";
import {FormsModule} from "@angular/forms";
import {ShoppingListComponent} from "./shopping-list.component";
import {ShoppingListRoutingModule} from "./shopping-list-routing.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ShoppingListRoutingModule
  ],
  declarations: [
    ShoppingListComponent,
    ShoppingEditComponent
  ]
})
export class ShoppingListModule { }
