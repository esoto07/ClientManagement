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
    case customerDetailsActions.SET_CUSTOMERS_ADDRESS:
      return { ...state, addresses: action.payload };
    case customerDetailsActions.ADD_CUSTOMER_ADDRESS:
      const addresses = [...state.addresses];
      const { customer, address: newAddress } = action.payload;
      const addressId = Math.max(...addresses.map((a: CustomerAddress) => a.Id)) + 100;
      const address: CustomerAddress = {
        Id: addressId,
        CustomerId: customer.Id,
        Calle: newAddress.calle,
        Numero: newAddress.numero,
        Provincia: newAddress.provincia,
        Sector: newAddress.sector
      };

      addresses.push(address);

      return { ...state, addresses };
    default:
      return state;
  }
}