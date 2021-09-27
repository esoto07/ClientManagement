import { Component, ViewChild, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { NavBarConfig } from './core/interfaces/navbar-config.interface';
import { SetCustomers } from './shared/customers/store/customers.actions';
import * as appState from './state/app.state';
import { CustomerInfo } from './core/interfaces/customer-info.interface';
import { CustomerAddress } from './core/interfaces/customer-address.interface';
import { SetCustomersAddress } from './shared/customer-details/store/customer-details.actions';

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
  customers: CustomerInfo[] = [
    {Id: 1000, Name: 'Eddy', LastName: 'Soto'},
    {Id: 2000, Name: 'Eddy D.', LastName: 'Soto'},
    {Id: 3000, Name: 'Eddy R.', LastName: 'Soto'},
    {Id: 4000, Name: 'Eddy E.', LastName: 'Soto'},
    {Id: 5000, Name: 'Eddy P.', LastName: 'Soto'},
  ];
  customerAddresses: CustomerAddress[] = [
    { Id: 100, CustomerId: 1000, Calle: 'Calle B', Numero: '3', Provincia: 'Santo Domingo', Sector: 'Buenas Vista 2da.' },
    { Id: 200, CustomerId: 1000, Calle: 'Calle C', Numero: '5', Provincia: 'Santo Domingo', Sector: 'Buenas Vista 1ra.' },
    { Id: 300, CustomerId: 1000, Calle: 'Calle D', Numero: '4', Provincia: 'Santo Domingo', Sector: 'Buenas Vista 2da.' },
    { Id: 400, CustomerId: 3000, Calle: 'Calle B', Numero: '3', Provincia: 'Santo Domingo', Sector: 'Buenas Vista 2da.' },
    { Id: 500, CustomerId: 4000, Calle: 'Calle C', Numero: '5', Provincia: 'Santo Domingo', Sector: 'Buenas Vista 1ra.' },
    { Id: 600, CustomerId: 5000, Calle: 'Calle D', Numero: '4', Provincia: 'Santo Domingo', Sector: 'Buenas Vista 2da.' },
  ];

  constructor(private store: Store<appState.State>) {}

  ngOnInit() {
    this.store.dispatch(new SetCustomers(this.customers));
    this.store.dispatch(new SetCustomersAddress(this.customerAddresses));
  }
}
