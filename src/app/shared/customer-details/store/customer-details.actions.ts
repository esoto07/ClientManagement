import { Action } from "@ngrx/store";
import { CustomerAddress } from "src/app/core/interfaces/customer-address.interface";
import { CustomerInfo } from './../../../core/interfaces/customer-info.interface';

export const SET_CUSTOMERS_ADDRESS = '[CUSTOMER DETAILS] SET CUSTOMERS ADDRESS';
export const ADD_CUSTOMER_ADDRESS = '[CUSTOMER DETAILS] ADD CUSTOMER ADDRESS';

export class SetCustomersAddress implements Action {
  readonly type = SET_CUSTOMERS_ADDRESS;
  constructor(public payload: CustomerAddress[]) {}
}

export class AddCustomerAddress implements Action {
  readonly type = ADD_CUSTOMER_ADDRESS;
  constructor(public payload: {address: CustomerAddress, customer: CustomerInfo}) {}
}

export type Actions = SetCustomersAddress | AddCustomerAddress | any;