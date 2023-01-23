import { HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { Products } from 'src/app/Models/products';
import { ProductsService } from 'src/app/service/products.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  f:File =  new File(["foo"], "foo.txt", {
    type: "text/plain",
  });
  Product:Products = new Products("", "", "", "", false, this.f);

  //selectedFil:File = null;
  // [formGroup]="ProductAdded"
  ProductAdded:any = this.formBuilder.group({
    id:"",
    name: '',
    photo:"",
    description: '',
    type:false,
    file: this.f,
  });

  constructor(public ProductsServices:ProductsService, public router:Router, public formBuilder:FormBuilder){
  }


  AddProduct(prod:Products){
    prod.file = this.f;
    prod.photo = this.f.name;
    //console.log(event.target);

    console.log(prod);
       //Create form data
    // Make http post request over api
    // with formData as req
    this.ProductsServices.AddProductVtwo(prod).subscribe(a => {
      console.log(a);
      console.log(prod);


    })
    this.router.navigateByUrl("/Products");
  }


  onChange(event:any){
    this.f = event.target.files[0];
    const reader = new FileReader();
  }

  // onFileChanged(event:any){
  //  this.f = event.target.files[0];
  // }

  // onUpload(){

  //   this.ProductsServices.onUpload(this.f).subscribe(a => {
  //     console.log(a);
  //   })
  // }

//   imagesPreview(event:any) {
//     if (event.target.files && event.target.files[0]) {
//         const reader = new FileReader();

//         reader.onload = (_event: any) => {
//             this.Product = {
//                 id:"",
//                 type:false,
//                 description: "",
//                 photo: _event.target.result,
//                 file: event.srcElement.files[0],
//                 name: event.srcElement.files[0].name
//             };
//         };
//         reader.readAsDataURL(event.target.files[0]);
//     }
// }

// save(): void {
//     const formData = new FormData();
//     formData.append('myImageToSend', this.Product.file);
//     formData.append('title', 'Set your title name here');
//     formData.append('description', 'Set your title description here');

//     this.ProductsServices.upload(formData).subscribe(data => {console.log(data)});
// }
}

