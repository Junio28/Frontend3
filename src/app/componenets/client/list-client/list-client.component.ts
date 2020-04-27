import { Component, OnInit } from '@angular/core';
import { ClientsService } from '../../../services/clients.service';
import { ClientI } from '../../../models/client-i';

@Component({
  selector: 'app-list-client',
  templateUrl: './list-client.component.html',
  styleUrls: ['./list-client.component.css']
})
export class ListClientComponent implements OnInit {
  clients: any = [];
  constructor(private clientsService: ClientsService ) { }

  ngOnInit(): void {
    this.getClient();
  }

  getClient(){
    this.clientsService.getClients().subscribe(
      res=> {
        this.clients = res;
        console.log(this.clients);

      },
      err => console.error(err)
    );
  }
}
