import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Store, select } from '@ngrx/store';
import { AddCustomerAddress } from '../../customer-details/store/customer-details.actions';
import { getCurrentCustomerState } from '../../customers/store';
import * as fromCustomer from '../../customers/store/customers.reducer';
import { CustomerInfo } from './../../../core/interfaces/customer-info.interface';

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
    { name: 'provincia', value: null, validators: [Validators.required], label: 'Provincia', type: 'text' },
    { name: 'numero', value: null, validators: [Validators.required], label: 'Número', type: 'text' },
    { name: 'calle', value: null, validators: [Validators.required], label: 'Calle', type: 'text' }
  ];

  constructor(private fb: FormBuilder,
              public activeModal: NgbActiveModal,
              private store: Store<fromCustomer.CustomerState>) { }

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
    this.store.dispatch(new AddCustomerAddress({address: this.addressForm.getRawValue(), customer: this.currentCustomer}));
    this.activeModal.close();
  }

}
