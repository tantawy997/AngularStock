import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductToCatalogComponent } from './product-to-catalog/product-to-catalog.component';
import { ProductsComponent } from './products.component';
import { UpdateProductComponent } from './update-product/update-product.component';

const routes: Routes = [
  {path:"Products/AddProduct", component:AddProductComponent},
  {path: '', component: ProductsComponent },
  {path:"Products/Update/:id", component:UpdateProductComponent},
  {path:"Products/Details/:id", component:ProductDetailsComponent},
  {path:"Products/AddProductToCatalog/:id", component:ProductToCatalogComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
