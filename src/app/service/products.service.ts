import { formatDate } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Details } from '../Models/details';
import { Products } from '../Models/products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
   httpOptions:any = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
  }

  constructor(public http:HttpClient) {

  }

  GetAllProducts(){

    return this.http.get<Products[]>("https://localhost:7062/api/Products/");
  }

  AddProduct(Product:Details){
    return this.http.post<Details>('https://localhost:7062/api/Details/',Product);
  }

  DeleteProduct(id:string){
    return this.http.delete("https://localhost:7062/api/Products/" +id);
  }
  UpdateProduct(Product:Details){
    return this.http.put<Details>("https://localhost:7062/api/Details/"+ Product.productsId, Product);
  }

  GetProduct(id:string|null){
    return this.http.get<Details>("https://localhost:7062/api/Details/"+id);
  }

  // AddProductVtwo(Product:any):Observable<any>{
  //   console.log(Product);
  //   const Formdata = new FormData();

  //   Formdata.append("id", Product.id);
  //   Formdata.append("name", Product.name);
  //   Formdata.append("photo", Product.photo);
  //   Formdata.append("description", Product.description);
  //   Formdata.append("type", Product.type);
  //   Formdata.append("image",Product.image ,Product.image);

  //   return this.http.post("https://localhost:7062/api/Products/Add/",formatDate, this.httpOptions);

  // }

}
