import { Action } from "@ngrx/store";
import { CustomerAddress } from "src/app/core/interfaces/customer-address.interface";

export const SET_CUSTOMERS_ADDRESS = '[CUSTOMER DETAILS] SET CUSTOMERS ADDRESS';
export const ADD_CUSTOMER_ADDRESS = '[CUSTOMER DETAILS] ADD CUSTOMER ADDRESS';
export const REMOVE_CUSTOMER_ADDRESS = '[CUSTOMER DETAILS] REMOVE CUSTOMER ADDRESS';

export class SetCustomersAddress implements Action {
  readonly type = SET_CUSTOMERS_ADDRESS;
  constructor(public payload: CustomerAddress[]) {}
}

export class AddCustomerAddress implements Action {
  readonly type = ADD_CUSTOMER_ADDRESS;
  constructor(public payload: CustomerAddress) {}
}

export class RemoveCustomerAddress implements Action {
  readonly type = REMOVE_CUSTOMER_ADDRESS;
  constructor(public payload: string) {}
}

export type Actions = SetCustomersAddress | AddCustomerAddress | RemoveCustomerAddress | any;