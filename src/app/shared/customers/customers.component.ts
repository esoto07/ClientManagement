import { Component, OnInit } from '@angular/core';
import { CustomerInfo } from '../../core/interfaces/customer-info.interface';
import { select, Store } from '@ngrx/store';
import * as fromCustomer from '../customers/store/customers.reducer';
import { getCustomersState } from './store';
import { SetCurrentCustomer } from './store/customers.actions';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  customers: CustomerInfo[] = [];
  currentCustomer?: CustomerInfo;

  constructor(private store: Store<fromCustomer.CustomerState>) {}

  ngOnInit(): void {
    this.store.pipe(select(getCustomersState)).subscribe(data => {
      this.customers = data;
    });
  }

  showCustomerDetails(id: string) {
    if (id === this.currentCustomer?._id) {
      this.store.dispatch(new SetCurrentCustomer(null));
      this.currentCustomer = undefined;
    } else {
      this.currentCustomer = this.customers.find(c => c._id === id) as CustomerInfo;
      this.store.dispatch(new SetCurrentCustomer(this.currentCustomer));
    }
  }
}
