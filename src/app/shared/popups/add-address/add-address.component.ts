import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Store, select } from '@ngrx/store';
import { AddCustomerAddress } from '../../customer-details/store/customer-details.actions';
import { getCurrentCustomerState } from '../../customers/store';
import * as fromCustomer from '../../customers/store/customers.reducer';
import { CustomerInfo } from './../../../core/interfaces/customer-info.interface';
import { AddressService } from './../../../core/services/address.service';
import { CustomerAddress } from 'src/app/core/interfaces/customer-address.interface';

@Component({
  selector: 'app-add-address',
  templateUrl: './add-address.component.html',
  styleUrls: ['./add-address.component.css']
})
export class AddAddressComponent implements OnInit {

  addressForm: FormGroup;
  currentCustomer: CustomerInfo;
  formConfig: any[] = [
    { name: 'sector', value: null, validators: [Validators.required], label: 'Sector', type: 'text' },
    { name: 'province', value: null, validators: [Validators.required], label: 'Provincia', type: 'text' },
    { name: 'number', value: null, validators: [Validators.required], label: 'Número', type: 'text' },
    { name: 'street', value: null, validators: [Validators.required], label: 'Calle', type: 'text' }
  ];

  constructor(private fb: FormBuilder,
              public activeModal: NgbActiveModal,
              private store: Store<fromCustomer.CustomerState>,
              private addressService: AddressService) { }

  ngOnInit(): void {
    this.buildForm();

    this.store.pipe(select(getCurrentCustomerState)).subscribe(data => {
      this.currentCustomer = data;
    });
  }

  buildForm() {
    let form: FormGroup = this.fb.group({});

    this.formConfig.forEach(c => {
      form.addControl(c.name, new FormControl(c.value, c.validators));
    });

    this.addressForm = form;
  }

  addAddress() {
    const newAddress: CustomerAddress = {
      client: this.currentCustomer._id,
      number: this.addressForm.get('number')?.value,
      province: this.addressForm.get('province')?.value,
      sector: this.addressForm.get('sector')?.value,
      street: this.addressForm.get('street')?.value
    };

    this.addressService.addNewAddress(newAddress).subscribe(
    (res) => {
      this.store.dispatch(new AddCustomerAddress(newAddress));
      this.activeModal.close();
    },
    (err) => {
      console.error(err);
    });
  }

}
