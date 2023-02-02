import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Details } from 'src/app/Models/details';
import { ProductsService } from 'src/app/service/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  id:string| null = "";
  zero:boolean = false;
  one:boolean=true;
  type:string = "";
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
      if (this.Product.type == true){
        this.type = "available";
      }
    })

  }

  back(){
    this.router.navigateByUrl("/");
  }
}
