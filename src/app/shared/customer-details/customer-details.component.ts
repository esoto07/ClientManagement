import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CustomerAddress } from 'src/app/core/interfaces/customer-address.interface';
import { CustomerInfo } from './../../core/interfaces/customer-info.interface';
import { Store, select } from '@ngrx/store';
import * as fromCustomerDetails from './store/customer-details.reducer';
import { getCustomerAddressesState } from './store';
import { PopupService } from './../../core/services/popup.service';
import { AddressService } from './../../core/services/address.service';
import { RemoveCustomerAddress } from './store/customer-details.actions';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit, OnChanges {

  @Input() customer?: CustomerInfo;
  customerAddresses: CustomerAddress[] = [];
  addresses: CustomerAddress[] = [];

  constructor(private store: Store<fromCustomerDetails.CustomerDetailsState>,
              private popupService: PopupService,
              private addressService: AddressService) { }

  ngOnInit(): void {
    this.store.pipe(select(getCustomerAddressesState)).subscribe(data => {
      this.customerAddresses = data.filter(c => c.client === this.customer?._id);
      this.addresses = data;
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    const { customer } = changes;

    if (customer.previousValue !== customer.currentValue) {
      if (customer.currentValue) {
        this.customerAddresses = this.addresses.filter((c: CustomerAddress) => c.client === this.customer?._id);
      }
    }
  }

  addCustomerAddress() {
    this.popupService.getAddAddressPopup();
  }

  removeAddress(id: string = '') {
    if (id === '') return;

    this.addressService.removeAddress(id).subscribe(
      (data) => {
        this.store.dispatch(new RemoveCustomerAddress(id));
      },
      (err) => console.error(err)
    )
  }
}
