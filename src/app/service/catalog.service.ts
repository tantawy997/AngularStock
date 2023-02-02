import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Catalog } from '../Models/catalog';

@Injectable({
  providedIn: 'root'
})
export class CatalogService {

  //url:string = 'https://localhost:7062/api/Catalog';

  constructor(public http:HttpClient) { }

  GetAllCatalogs(){

   return this.http.get<Catalog[]>('https://localhost:7062/api/Catalog/');

  }

  DeleteCatalog(id:string){
    return this.http.delete<Catalog>('https://localhost:7062/api/Catalog/'+id);
  }
  getCatalog(id:string){
    return this.http.get<Catalog>('https://localhost:7062/api/Catalog/'+id);
  }

  addCatalog(catalog:Catalog){
    return this.http.post<Catalog>('https://localhost:7062/api/Catalog/', catalog);

  }
  editCatalog(catalog:Catalog){
    return this.http.put<Catalog>('https://localhost:7062/api/Catalog/'+catalog.id ,catalog);
  }
}
