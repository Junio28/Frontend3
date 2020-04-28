import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../../services/products.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

   // @HostBinding('class') classes = 'row';
  product: any = {
    id: 0,
    name: '',
    quantity: '',
    price: '',
    description:'',
    mark: '',
    typeProductId: ''
  }

  edit: boolean = false;
  constructor(private productsService: ProductsService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
        const params = this.activatedRoute.snapshot.params;
        	    //  console.log(params);
              if(params.id){
                this.productsService.getProduct(params.id)
                  .subscribe(
                    res=>{
                      console.log(res);
                      this.product =res;
                      this.edit = true;
                    },
                    err=>console.error(err)
                  )
              }
  }

  saveNewProduct(){
    this.productsService.addProduct(this.product)
      .subscribe(
        res => {
          this.router.navigate(['/producto']);
        },
        err => console.error(err)
      )
  }

  updateProduct(){
    //console.log(this.user)
    this.productsService.updateProduct(this.product.id, this.product)
      .subscribe(
        res=>{
          this.router.navigate(['/producto']);
          console.log(res);
        },
        err=> console.log(err)
      )
  }
}
