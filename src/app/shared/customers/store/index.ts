import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CustomerState } from "./customers.reducer";

const getCustomersFeatureStatus = createFeatureSelector<CustomerState>('customer');

export const getCustomersState = createSelector(getCustomersFeatureStatus, state => state.customers);

export const getCurrentCustomerState = createSelector(getCustomersFeatureStatus, state => state.currentCustomer);