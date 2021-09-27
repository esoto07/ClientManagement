import * as customerActions from './customers.actions';
import { CustomerInfo } from './../../../core/interfaces/customer-info.interface';

export interface CustomerState {
  customers: CustomerInfo[];
  currentCustomer: CustomerInfo | any;
}

const initialState: CustomerState = {
  customers: [],
  currentCustomer: null
}

export function CustomersReducer(state = initialState, action: customerActions.Actions): CustomerState {
  switch (action.type) {
    case customerActions.SET_CUSTOMERS:
      return { ...state, customers: action.payload };
    case customerActions.SET_CURRENT_CUSTOMER:
      return { ...state, currentCustomer: action.payload}
    default:
      return state;
  }
}