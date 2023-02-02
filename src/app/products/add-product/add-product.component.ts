import { HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { Details } from 'src/app/Models/details';
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
  //loading:boolean =false;
  Product:Details = new Details("","", 0,0,"","",false);
  zero:boolean = false;
  one:boolean=true;

  constructor(public ProductsServices:ProductsService, public router:Router){
  }


  AddProduct(prod:Details){
    console.log(prod);

    if (prod.type == this.zero){
      prod.type = false
    }else{
      prod.type = true;
    }

    this.ProductsServices.AddProduct(prod).subscribe((response) => {
      console.log(response);

    },
    (e) => {
      console.log(e)
    })

    this.router.navigateByUrl("/Products");
  }


  // onChange(event:any){
  //   this.loading = !this.loading;
  //   this.ProductAddForm.value.image = event.target.files[0];
  //   console.log(this.ProductAddForm.value.image);
  // }

}

