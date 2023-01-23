import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Products } from 'src/app/Models/products';
import { ProductsService } from 'src/app/service/products.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  id:string| null = "";
  f:any = new File(["foo"], "foo.txt", {
    type: "text/plain",
  });
  Product:Products = new Products("" ,"" ,"" , "",false,this.f );
  constructor(private ProductService:ProductsService, private router:Router, private route:ActivatedRoute){

  }
  ngOnInit() {

    this.route.paramMap.subscribe( p => {
      this.id = p.get("id");

      //this.ProductService.

    })
  }


  onSubmit(){



  }

}
