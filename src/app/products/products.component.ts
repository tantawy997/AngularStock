import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductCatalogs } from '../Models/product-catalogs';
import { Products } from '../Models/products';
import { CatalogService } from '../service/catalog.service';
import { ProductCatalogService } from '../service/product-catalog.service';
import { ProductsService } from '../service/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  Products :Products[] = [];
  productWithCatalog:ProductCatalogs []= [];
f:any = new File(["foo"], "foo.txt", {
    type: "text/plain",
  });
  Product:Products = new Products("", "", "", false);
  //url:string = `/Products/Update/${this.Product.id}`;

  constructor(public productSerivce: ProductsService, public http:HttpClient, public router:Router,public productWithCatalogs:ProductCatalogService,
  public CatalogSerivce:CatalogService){

  }

  EditProduct(id:string){
    this.router.navigateByUrl("/Products/Update/"+id);
  }
  ShowDetails(id:string){
    this.router.navigateByUrl("/Products/Details/"+id);
  }
  ngOnInit() {
    this.productSerivce.GetAllProducts().subscribe(AllProduct => {
      this.Products = AllProduct;
    });
    this.productWithCatalogs.GetAllProductWithCatalog().subscribe((res)=> {
      console.log(res);

      this.productWithCatalog = res;
    })
  }

  Delete(id:string){
    console.log(id);
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


  AddToCatalog(id:string){
    this.router.navigateByUrl("/Products/AddProductToCatalog/"+id);
  }

}
