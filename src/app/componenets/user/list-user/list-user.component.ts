import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../../services/users.service';
import { UserI } from '../../../models/user-i';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {
  users: any = [];
  constructor(private usersService: UsersService ) { }

  ngOnInit(): void {
    this.getUser();
  }

  getUser(){
    this.usersService.getUsers().subscribe(
      res=> {
        this.users = res;
        //console.log(this.users);
        
      },
      err => console.error(err)
    );
  }
}
