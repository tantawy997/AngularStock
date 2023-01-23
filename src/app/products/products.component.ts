import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Products } from '../Models/products';
import { ProductsService } from '../service/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  Products :Products[] = [];
f:any = new File(["foo"], "foo.txt", {
    type: "text/plain",
  });
  Product:Products = new Products("", "", "", "", false,this.f);
  url:string = `/Products/Update/${this.Product.id}`;

  constructor(public productSerivce: ProductsService, public http:HttpClient, public router:Router){

  }

  EditProduct(id:string){
    this.router.navigateByUrl("/Products/Update/"+id);
  }

  ngOnInit() {
    this.productSerivce.GetAllProducts().subscribe(AllProduct => {
      this.Products = AllProduct;
      console.log(this.Product.photo);
    });
  }

  Delete(id:string){

    if (confirm("are you sure")){
      this.productSerivce.DeleteProduct(id).subscribe(a => {
        console.log(a);
        this.productSerivce.GetAllProducts().subscribe(b =>{
          this.Products = b;
      })

      })
      console.log(id);
    }



  }
  Length(){
    if (this.Products.length == 0){
      return false;
    }
    else{
      return true;
    }
  }

}
