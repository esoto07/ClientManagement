import * as customerDetailsActions from './customer-details.actions';
import { CustomerAddress } from 'src/app/core/interfaces/customer-address.interface';

export interface CustomerDetailsState {
  addresses: CustomerAddress[];
}

const initialState: CustomerDetailsState = {
  addresses: []
}

export function CustomerDetailsReducer(state = initialState, action: customerDetailsActions.Actions): CustomerDetailsState {
  switch (action.type) {
    case customerDetailsActions.SET_CUSTOMERS_ADDRESS: {
      return { ...state, addresses: action.payload };
    }
    case customerDetailsActions.ADD_CUSTOMER_ADDRESS: {
      const addresses = [...state.addresses];

      addresses.push(action.payload);

      return { ...state, addresses };
    }
    case customerDetailsActions.REMOVE_CUSTOMER_ADDRESS: {
        const addresses = state.addresses.filter(addr => addr._id !== action.payload);
        return { ...state, addresses };
      }
    default:
      return state;
  }
}