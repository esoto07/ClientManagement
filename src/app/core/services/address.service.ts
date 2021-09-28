import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CustomerAddress } from 'src/app/core/interfaces/customer-address.interface';
import { catchError, tap } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  constructor(private http: HttpClient) { }

  getAllAddresses() {
    return this.http.get('http://localhost:3000/api/clients/address')
      .pipe(catchError(err => throwError(err)));
  }

  addNewAddress(address: CustomerAddress) {
    return this.http.post('http://localhost:3000/api/clients/address', address, { responseType: 'text' })
      .pipe(
        tap(data => data),
        catchError(err => throwError(err))
      );
  }

  removeAddress(id: string) {
    return this.http.delete(`http://localhost:3000/api/clients/address/${id}`)
      .pipe(
        tap(data => data),
        catchError(err => throwError(err))
      )
  }
}
