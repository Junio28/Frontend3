import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {
  API_URI = 'http://localhost:4000/';

  constructor(private http: HttpClient) { }
}
