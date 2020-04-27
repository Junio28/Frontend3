import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserI } from '../models/user-i';


@Injectable({
  providedIn: 'root'
})
export class UsersService {
  API_URI = 'http://localhost:4000';
  user: UserI

  constructor(private http: HttpClient) { }

  getUsers(){
    return this.http.get(`${this.API_URI}/users`);
  }

  addUser(user: UserI){
    return this.http.post(`${this.API_URI}/users`, user);
  }

  deleteUser(id: string){
    return this.http.delete(`${this.API_URI}/users/${id}`);
  }
}
