import { Component, OnInit, HostBinding } from '@angular/core';
import { ClientsService } from '../../../services/clients.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create-client',
  templateUrl: './create-client.component.html',
  styleUrls: ['./create-client.component.css']
})
export class CreateClientComponent implements OnInit {

  // @HostBinding('class') classes = 'row';

  client: any = {
    id: 0,
    name: '',
    lastname: '',
    email: '',
    rut: '',
    address: '',
    phone: ''
  }
  constructor(private clientsService: ClientsService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    //const params = this.activatedRoute.snapshot.params;
  }

  saveNewClient(){
    this.clientsService.addClient(this.client)
      .subscribe(
        res => {
          this.router.navigate(['/cliente']);
        },
        err => console.error(err)
      )
  }
}
