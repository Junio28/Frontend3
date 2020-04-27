import { Component, OnInit, HostBinding } from '@angular/core';
import { UsersService } from '../../../services/users.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  user: any = {
    id: 0,
    name: '',
    surname: '',
    email: '',
    password: ''
  }
  constructor(private usersService: UsersService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    //const params = this.activatedRoute.snapshot.params;
  }

  saveNewUser(){
    this.usersService.addUser(this.user)
      .subscribe(
        res => {
          this.router.navigate(['/usuario']);
        },
        err => console.error(err)
      )
  }

}
