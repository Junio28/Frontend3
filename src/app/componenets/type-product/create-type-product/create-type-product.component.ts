import { Component, OnInit, HostBinding } from '@angular/core';
import { TypeProductsService } from '../../../services/type-products.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create-type-product',
  templateUrl: './create-type-product.component.html',
  styleUrls: ['./create-type-product.component.css']
})
export class CreateTypeProductComponent implements OnInit {

  // @HostBinding('class') classes = 'row';
  typeproduct: any = {
    id: 0,
    name: ''
  }
  constructor(private typeproductsService: TypeProductsService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    //const params = this.activatedRoute.snapshot.params;
  }

  saveNewTypeProduct(){
    this.typeproductsService.addTypeProduct(this.typeproduct)
      .subscribe(
        res => {
          this.router.navigate(['/tipo_producto']);
        },
        err => console.error(err)
      )
  }
}
