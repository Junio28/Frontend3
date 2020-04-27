import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ClientI } from '../models/client-i';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {
  API_URI = 'http://localhost:4000';
  client: ClientI

  constructor(private http: HttpClient) { }

  getClients(){
    return this.http.get(`${this.API_URI}/clients`);
  }

  addClient(user: ClientI){
    return this.http.post(`${this.API_URI}/clients`, user);
  }

  deleteClient(id: string){
    return this.http.delete(`${this.API_URI}/clients/${id}`);
  }
}
