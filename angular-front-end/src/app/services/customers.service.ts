import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  private customersUrl = 'http://localhost:8888/CUSTOMER-SERVICE/customers';

  constructor(private http: HttpClient) { }

  getlistOfCustomers(){
     return this.http.get(this.customersUrl);
  }
}
