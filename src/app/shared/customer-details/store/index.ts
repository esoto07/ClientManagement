import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CustomerDetailsState } from "./customer-details.reducer";

const getCustomerDetailsFeatureStatus = createFeatureSelector<CustomerDetailsState>('customerDetails');

export const getCustomerAddressesState = createSelector(getCustomerDetailsFeatureStatus, state => state.addresses);