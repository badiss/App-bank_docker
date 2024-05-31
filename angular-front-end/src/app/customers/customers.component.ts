import { Component, OnInit } from '@angular/core';
import { CustomersService } from '../services/customers.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-customers',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.css'
})
export class CustomersComponent implements OnInit {

  customers: any

  constructor(private _customersService: CustomersService) { }

  ngOnInit() {
    this.getListCustomers();
  }

  getListCustomers() {
    this._customersService.getlistOfCustomers().subscribe({
     next : data => {
      this.customers = data;
    },
    error : err => {
      console.log(err)
    }
    })

  }


}
