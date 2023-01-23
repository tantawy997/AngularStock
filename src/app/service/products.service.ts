import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Products } from '../Models/products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(public http:HttpClient) {

  }
  baseApiUrl = "https://file.io";

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

  AddProductVtwo(Product:Products){
    const formData = new FormData();
    if ( Product.file != null  ) {
       formData.set('file', Product.file);
     }
     // Store form name as "file" with file data
     //formData.append("text", Product.file, Product.file.name);
     formData.append("file", Product.file.name)
     // Make http post request over api
     // with formData as req
     let header = new HttpHeaders();
     header = header.append('enctype', 'multipart/form-data');

    return this.http.post("https://localhost:7062/api/Products/Add/",Product, {headers:header});

  }

//   upload(file:any) {

//     // Create form data


//     return this.http.post("https://localhost:7062/api/Products/photo", formData);
// }

// public uploadImage(image: any): Observable<any> {
//   const formData = new FormData();

//   formData.append('image', image);

//   return this.http.post('https://localhost:7062/api/Products/photo', formData);
// }

// onUpload(image:any) {
//   // this.http is the injected HttpClient
//   const uploadData = new FormData();

//   uploadData.append('file', image, image.name);

//   return this.http.post('https://localhost:7062/api/Products/photo', uploadData);
// }
}
