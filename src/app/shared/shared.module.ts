import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersComponent } from './customers/customers.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { AddAddressComponent } from './popups/add-address/add-address.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { AddressService } from './../core/services/address.service';
import { CustomerService } from './../core/services/customer.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [CustomersComponent, CustomerDetailsComponent, AddAddressComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgbTooltipModule,
    HttpClientModule
  ],
  providers: [AddressService, CustomerService]
})
export class SharedModule {}
