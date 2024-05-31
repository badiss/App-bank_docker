import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AccountsService } from '../services/accounts.service';

@Component({
  selector: 'app-accounts',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './accounts.component.html',
  styleUrl: './accounts.component.css'
})
export class AccountsComponent implements OnInit {

  accounts: any;

  constructor(private _accountsService: AccountsService) { }

  ngOnInit() {
    this.getListAccounts();
  }

  getListAccounts() {
    this._accountsService.getlistOfAccounts().subscribe({
     next : data => {
      this.accounts = data;
    },
    error : err => {
      console.log(err)
    }
    })

  }

}
