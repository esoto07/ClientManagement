import { Component, ViewChild, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { NavBarConfig } from './core/interfaces/navbar-config.interface';
import { SetCustomers } from './shared/customers/store/customers.actions';
import * as appState from './state/app.state';
import { CustomerInfo } from './core/interfaces/customer-info.interface';
import { CustomerAddress } from './core/interfaces/customer-address.interface';
import { SetCustomersAddress } from './shared/customer-details/store/customer-details.actions';
import { AddressService } from './core/services/address.service';
import { CustomerService } from './core/services/customer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'user-info';
  navBarConfig: NavBarConfig[] = [
    { Label: 'Inicio', Link: '/' },
    { Label: 'Clientes', Link: '/customers' }
  ];

  constructor(private store: Store<appState.State>,
              private customerService: CustomerService,
              private addressService: AddressService) {}

  ngOnInit() {

    this.customerService.getAllCustomers().subscribe(
      (res) => {
        const customers: CustomerInfo[] = res as CustomerInfo[];
        this.store.dispatch(new SetCustomers(customers));
      }
    );
    
    this.addressService.getAllAddresses().subscribe(
      (data) => {
        const addresses: CustomerAddress[] = data as CustomerAddress[];
        this.store.dispatch(new SetCustomersAddress(addresses));
      },
      (err) => err
    );
  }
}
