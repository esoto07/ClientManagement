import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }

  getAllCustomers() {
    return this.http.get('http://localhost:3000/api/clients').pipe(
      tap(data => data),
      catchError(err => throwError(err))
    )
  }
}
