import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogsRoutingModule } from './catalogs-routing.module';
import { CatalogsComponent } from './catalogs.component';
import { CatalogDetailsComponent } from './catalog-details/catalog-details.component';
import { EditCatalogComponent } from './edit-catalog/edit-catalog.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AddCatalogComponent } from './add-catalog/add-catalog.component';
import { CatalogToProductComponent } from './catalog-to-product/catalog-to-product.component';


@NgModule({
  declarations: [
    CatalogsComponent,
    CatalogDetailsComponent,
    EditCatalogComponent,
    AddCatalogComponent,
    CatalogToProductComponent,

  ],
  imports: [
    CommonModule,
    CatalogsRoutingModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
  ]
  ,exports:[RouterModule,CatalogsComponent,CatalogDetailsComponent,EditCatalogComponent,AddCatalogComponent]
})
export class CatalogsModule { }
