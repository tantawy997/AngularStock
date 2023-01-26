import { formatDate } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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

  AddProduct(Product:Products){
    return this.http.post<Products>('https://localhost:7062/api/Products',Product);
  }

  DeleteProduct(id:string){
    return this.http.delete("https://localhost:7062/api/Products/" +id);
  }
  UpdateProduct(Product:Products){
    return this.http.put<Products>("https://localhost:7062/api/Products/", Product);
  }

  AddProductVtwo(Product:any):Observable<any>{
    console.log(Product);
    const Formdata = new FormData();

    Formdata.append("id", Product.id);
    Formdata.append("name", Product.name);
    Formdata.append("photo", Product.photo);
    Formdata.append("description", Product.description);
    Formdata.append("type", Product.type);
    Formdata.append("image",Product.image ,Product.image);

    return this.http.post("https://localhost:7062/api/Products/Add/",formatDate, this.httpOptions);

  }

}
