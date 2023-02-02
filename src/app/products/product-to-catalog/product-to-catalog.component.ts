import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Catalog } from 'src/app/Models/catalog';
import { ProductCatalogs } from 'src/app/Models/product-catalogs';
import { Products } from 'src/app/Models/products';
import { CatalogService } from 'src/app/service/catalog.service';
import { ProductCatalogService } from 'src/app/service/product-catalog.service';
import { ProductsService } from 'src/app/service/products.service';

@Component({
  selector: 'app-product-to-catalog',
  templateUrl: './product-to-catalog.component.html',
  styleUrls: ['./product-to-catalog.component.css']
})
export class ProductToCatalogComponent implements OnInit {

  records:ProductCatalogs []= [];
  productCatalog:ProductCatalogs = new ProductCatalogs("","");
  Catalogs:Catalog [] = [];
  id:string|null = "";
  ProductName:string = "";
  constructor(public ProductService:ProductsService, public catalogSerivce:CatalogService, public router:Router,public active:ActivatedRoute,public ProductCatalogService:ProductCatalogService){

  }
  ngOnInit() {
    this.catalogSerivce.GetAllCatalogs().subscribe((res) => {
      this.Catalogs = res;
    })
    this.active.paramMap.subscribe((res)=> {
      this.id = res.get("id");
    })


  }

  add(id:string){
    console.log(id);
    console.log(this.productCatalog);

    console.log(this.id);
    if (this.id == null){
      this.id = null
    }else{
      this.productCatalog.productsId = this.id;
    }
    this.productCatalog.catalogsId = id
    this.ProductCatalogService.AddProductToCatalog(this.productCatalog).subscribe((res)=>{
      console.log(res);
    })
    this.router.navigateByUrl("/");
  }

  back(){
    this.router.navigateByUrl("/");
  }
}
