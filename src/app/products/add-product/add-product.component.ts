import { HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
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
  loading:boolean =false;
  //Product:Products = new Products("", "", "", "", false, this.f);
  ProductAddForm:FormGroup=new FormGroup(
    {
      id:new FormControl(""),
      name:new FormControl(""),
      photo:new FormControl(""),
      description:new FormControl(""),
      type:new FormControl(false),
      image:new FormControl(null)
    }
  );

  constructor(public ProductsServices:ProductsService, public router:Router){
  }


  AddProduct(prod:FormGroup){
    //console.log(event.target);
    console.log(prod);
    prod.value.photo = prod.value.image.name;

    this.ProductsServices.AddProductVtwo(prod.value).subscribe((response) => {
      console.log(response);

    },
    (e) => {
      console.log(e)
    })
    //this.router.navigateByUrl("/Products");
  }


  onChange(event:any){
    this.loading = !this.loading;
    this.ProductAddForm.value.image = event.target.files[0];
    console.log(this.ProductAddForm.value.image);
  }

}

