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

  edit: boolean = false;
  constructor(private salesService: SalesService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;
        	    //  console.log(params);
              if(params.id){
                this.salesService.getSale(params.id)
                  .subscribe(
                    res=>{
                      console.log(res);
                      this.sale =res;
                      this.edit = true;
                    },
                    err=>console.error(err)
                  )
              }
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

  updateSale(){
    //console.log(this.user)
    this.salesService.updateSale(this.sale.id, this.sale)
      .subscribe(
        res=>{
          this.router.navigate(['/venta']);
          console.log(res);
        },
        err=> console.log(err)
      )
  }
}
