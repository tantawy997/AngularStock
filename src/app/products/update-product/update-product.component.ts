import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Details } from 'src/app/Models/details';
import { Products } from 'src/app/Models/products';
import { ProductsService } from 'src/app/service/products.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  id:string| null = "";
  zero:boolean = false;
  one:boolean=true;

  Product:Details = new Details("" ,"",0, 0 ,"" , "",false);
  constructor(private ProductService:ProductsService, private router:Router, private route:ActivatedRoute){

  }
  ngOnInit() {

    this.route.paramMap.subscribe( p => {
      this.id = p.get("id");
      console.log(this.id);
    })
    if (this.id == null){
      this.id = null
    }else{
      this.Product.productsId = this.id;
    }
    this.ProductService.GetProduct(this.Product.productsId).subscribe((res) => {
      console.log(res);
      this.Product= res;
      console.log(this.Product);
    })

  }

  back(){
    this.router.navigateByUrl("/");
  }

  EditProdut(product:Details){
    if (product.type == this.zero){
      product.type = false
    }else{
      product.type = true;
    }

    this.ProductService.UpdateProduct(product).subscribe((response) => {
      console.log(response);

    },
    (e) => {
      console.log(e)
    })

    this.router.navigateByUrl("/");
  }


}
