import { Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddAddressComponent } from './../../shared/popups/add-address/add-address.component';

@Injectable({
  providedIn: 'root'
})
export class PopupService {

  constructor(private popup: NgbModal) { }

  getAddAddressPopup() {
    this.popup.open(AddAddressComponent,
      {size: 'md',
      animation: true,
      centered: true,
      windowClass: 'custom-popup-size',
      keyboard: false,
      backdrop: 'static'
    });
  }
}
