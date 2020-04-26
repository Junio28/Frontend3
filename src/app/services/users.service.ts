import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UsersService {
  API_URI = 'http://localhost:4000/';

  constructor(private http: HttpClient) { }
}
