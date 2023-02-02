import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Catalog } from '../Models/catalog';
import { CatalogService } from '../service/catalog.service';

@Component({
  selector: 'app-catalogs',
  templateUrl: './catalogs.component.html',
  styleUrls: ['./catalogs.component.css']
})
export class CatalogsComponent implements OnInit {

  Catalogs:Catalog [] = [];
  constructor(public router:Router,public CatalogSerivce:CatalogService){

  }
  ngOnInit() {
    this.CatalogSerivce.GetAllCatalogs().subscribe((res) => {
      console.log(res);
      this.Catalogs = res;
    })
  }

  Length(){
    if (this.Catalogs.length == 0){
      return false;
    }
    else{
      return true;
    }
  }

  Delete(id:string){
    console.log(id);
    if (confirm("are you sure")){
      this.CatalogSerivce.DeleteCatalog(id).subscribe(a => {
        console.log(a);
      })

      console.log(id);
    }

    this.CatalogSerivce.GetAllCatalogs().subscribe(b =>{
      this.Catalogs = b;
  })
  }


  ShowDetails(id:string){

    this.router.navigateByUrl("catalogs/DetailCatalog/"+id);

  }

  EditCatalog(id:string){
    this.router.navigateByUrl("/catalogs/editCatalog/"+id);
  }

  ToAdd(){
    this.router.navigateByUrl("/catalogs/AddCatalog/");
  }

  AddToProduct(id:string){
    this.router.navigateByUrl("catalogs/AddCatalogToProduct/"+id);
  }
}
