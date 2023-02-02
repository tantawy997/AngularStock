import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdateProductComponent } from './update-product/update-product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CatalogsModule } from '../catalogs/catalogs.module';
import { ProductToCatalogComponent } from './product-to-catalog/product-to-catalog.component';


@NgModule({
  declarations: [
    ProductsComponent,
    AddProductComponent,
    UpdateProductComponent,
    ProductDetailsComponent,
    ProductToCatalogComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[ProductsComponent,AddProductComponent,RouterModule]
})
export class ProductsModule { }
