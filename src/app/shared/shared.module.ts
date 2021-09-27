import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersComponent } from './customers/customers.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { AddAddressComponent } from './popups/add-address/add-address.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [CustomersComponent, CustomerDetailsComponent, AddAddressComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgbTooltipModule
  ]
})
export class SharedModule {}
