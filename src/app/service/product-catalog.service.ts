import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductCatalogs } from '../Models/product-catalogs';

@Injectable({
  providedIn: 'root'
})
export class ProductCatalogService {

  constructor(public http:HttpClient) { }

  GetAllProductWithCatalog(){
    return this.http.get<ProductCatalogs[]>('https://localhost:7062/api/ProductCatalog/');
  }

  AddProductToCatalog(record:ProductCatalogs){
    // record.catalogsId= JSON.stringify(record.catalogsId);
    // record.productsId = JSON.stringify(record.productsId);
    return this.http.post<ProductCatalogs>('https://localhost:7062/api/ProductCatalog/',record);
  }
}
