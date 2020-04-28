import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SaleI } from '../models/sale-i';

@Injectable({
  providedIn: 'root'
})
export class SalesService {
  API_URI = 'http://localhost:4000';
  sale: SaleI

  constructor(private http: HttpClient) { }

  getSales(){
    return this.http.get(`${this.API_URI}/sales`);
  }

  addSale(sale: SaleI){
    return this.http.post(`${this.API_URI}/sales`, sale);
  }

  deleteSale(id: string){
    return this.http.delete(`${this.API_URI}/sales/${id}`);
  }
}
