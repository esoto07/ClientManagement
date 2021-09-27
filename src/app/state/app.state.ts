import { ActionReducerMap } from "@ngrx/store";
import * as fromCustomer from '../shared/customers/store/customers.reducer';
import * as fromCustomerDetails from '../shared/customer-details/store/customer-details.reducer';

export interface State {
    customer: fromCustomer.CustomerState,
    customerDetails: fromCustomerDetails.CustomerDetailsState
}

export const reducers: ActionReducerMap<State> = {
    customer: fromCustomer.CustomersReducer,
    customerDetails: fromCustomerDetails.CustomerDetailsReducer
}