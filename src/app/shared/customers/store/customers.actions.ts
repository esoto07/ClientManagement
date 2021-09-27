import { Action } from "@ngrx/store";
import { CustomerInfo } from './../../../core/interfaces/customer-info.interface';

export const SET_CUSTOMERS = '[CUSTOMERS] SET CUSTOMERS';
export const SET_CURRENT_CUSTOMER = '[CUSTOMERS] SET CURRENT CUSTOMER';

export class SetCustomers implements Action {
  readonly type = SET_CUSTOMERS;
  constructor(public payload: CustomerInfo[]) {}
}

export class SetCurrentCustomer implements Action {
  readonly type = SET_CURRENT_CUSTOMER;
  constructor(public payload: CustomerInfo | any) {}
}

export type Actions = SetCustomers | SetCurrentCustomer | any;