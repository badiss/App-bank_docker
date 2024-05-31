import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {

  private accountsUrl = 'http://localhost:8888/ACCOUNT-SERVICE/accounts';

  constructor(private http: HttpClient) { }

  getlistOfAccounts(){
    return this.http.get(this.accountsUrl);
 }
}
