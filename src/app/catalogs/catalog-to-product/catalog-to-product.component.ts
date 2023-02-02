import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductCatalogs } from 'src/app/Models/product-catalogs';
import { Products } from 'src/app/Models/products';
import { CatalogService } from 'src/app/service/catalog.service';
import { ProductCatalogService } from 'src/app/service/product-catalog.service';
import { ProductsService } from 'src/app/service/products.service';

@Component({
  selector: 'app-catalog-to-product',
  templateUrl: './catalog-to-product.component.html',
  styleUrls: ['./catalog-to-product.component.css']
})
export class CatalogToProductComponent {
  records:ProductCatalogs []= [];
  productCatalog:ProductCatalogs = new ProductCatalogs("","");
  products:Products [] = [];
  id:string|null = "";
  ProductName:string = "";
  constructor(public ProductService:ProductsService, public catalogSerivce:CatalogService, public router:Router,public active:ActivatedRoute,
    public ProductCatalogService:ProductCatalogService){

  }
  ngOnInit() {
    this.ProductService.GetAllProducts().subscribe((res) => {
      this.products = res;
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
      this.productCatalog.catalogsId = this.id;
    }
    //this.productCatalog.catalogsId = id;

    this.ProductCatalogService.AddProductToCatalog(this.productCatalog).subscribe((res)=>{
      console.log(res);
    })
    this.router.navigateByUrl("/");
  }

  back(){
    this.router.navigateByUrl("/");
  }

}
