import { Component, OnInit } from '@angular/core';
import { SalesService } from '../../../services/sales.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create-sale',
  templateUrl: './create-sale.component.html',
  styleUrls: ['./create-sale.component.css']
})
export class CreateSaleComponent implements OnInit {
  
// @HostBinding('class') classes = 'row';
  sale: any = {
    id: '',
    date: '',
    discount: '',
    subtotal:'',
    total:'',
    created: '',
    updated:'',
    userId:'',
    clientId:''
  }
  constructor(private salesService: SalesService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    //const params = this.activatedRoute.snapshot.params;
  }

    saveNewSale(){
    this.salesService.addSale(this.sale)
      .subscribe(
        res => {
          this.router.navigate(['/venta']);
        },
        err => console.error(err)
      )
  }
}
