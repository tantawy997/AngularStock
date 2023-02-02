import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductToCatalogComponent } from '../products/product-to-catalog/product-to-catalog.component';
import { AddCatalogComponent } from './add-catalog/add-catalog.component';
import { CatalogDetailsComponent } from './catalog-details/catalog-details.component';
import { CatalogsComponent } from './catalogs.component';
import { EditCatalogComponent } from './edit-catalog/edit-catalog.component';

const routes: Routes = [
  { path: '', component: CatalogsComponent },
  {path:"catalogs/DetailCatalog/:id", component: CatalogDetailsComponent},
  {path:"catalogs/editCatalog/:id", component:EditCatalogComponent},
  {path:"catalogs/AddCatalog/", component:AddCatalogComponent},
  {path:"catalogs/AddCatalogToProduct/:id", component:ProductToCatalogComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatalogsRoutingModule { }
