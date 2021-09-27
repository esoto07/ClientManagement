import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CustomerAddress } from 'src/app/core/interfaces/customer-address.interface';
import { CustomerInfo } from './../../core/interfaces/customer-info.interface';
import { Store, select } from '@ngrx/store';
import * as fromCustomerDetails from './store/customer-details.reducer';
import { getCustomerAddressesState } from './store';
import { PopupService } from './../../core/services/popup.service';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit, OnChanges {

  @Input() customer?: CustomerInfo;
  customerAddresses: CustomerAddress[] = [];
  addresses: CustomerAddress[] = [];

  constructor(private store: Store<fromCustomerDetails.CustomerDetailsState>, private popupService: PopupService) { }

  ngOnInit(): void {
    this.store.pipe(select(getCustomerAddressesState)).subscribe(data => {
      this.customerAddresses = data.filter(c => c.CustomerId === this.customer?.Id);
      this.addresses = data;
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    const { customer } = changes;

    if (customer.previousValue !== customer.currentValue) {
      if (customer.currentValue) {
        this.customerAddresses = this.addresses.filter((c: CustomerAddress) => c.CustomerId === this.customer?.Id);
      }
    }
  }

  addCustomerAddress() {
    this.popupService.getAddAddressPopup();
  }

}
