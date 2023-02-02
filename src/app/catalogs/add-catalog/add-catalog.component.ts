import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Catalog } from 'src/app/Models/catalog';
import { CatalogService } from 'src/app/service/catalog.service';

@Component({
  selector: 'app-add-catalog',
  templateUrl: './add-catalog.component.html',
  styleUrls: ['./add-catalog.component.css']
})
export class AddCatalogComponent  {

  catalog:Catalog = new Catalog("","");
  constructor(public catalogSerivce:CatalogService, public router:Router){

  }

  AddCatalog(catalogToAdd:Catalog){
    this.catalogSerivce.addCatalog(catalogToAdd).subscribe((res)=>{
      console.log(res);

    })
    this.router.navigateByUrl("/catalogs");
  }

  back(){
    this.router.navigateByUrl("/catalogs");
  }

}
