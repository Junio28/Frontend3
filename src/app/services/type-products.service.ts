import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TypeProductsService {
  API_URI = 'http://localhost:4000';

  constructor(private http: HttpClient) { }

  getTypeProducts(){
    return this.http.get(`${this.API_URI}/type_products`);
  }
}
