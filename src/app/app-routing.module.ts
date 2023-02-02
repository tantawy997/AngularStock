import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes =
 [{ path: 'Products', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule) },

{ path: 'shared', loadChildren: () => import('./shared/shared.module').then(m => m.SharedModule) },

{ path: '', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule)},
 { path: 'catalogs', loadChildren: () => import('./catalogs/catalogs.module').then(m => m.CatalogsModule) },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
