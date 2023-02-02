import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Catalog } from 'src/app/Models/catalog';
import { CatalogService } from 'src/app/service/catalog.service';

@Component({
  selector: 'app-edit-catalog',
  templateUrl: './edit-catalog.component.html',
  styleUrls: ['./edit-catalog.component.css']
})
export class EditCatalogComponent implements OnInit{
id:string|null = "";
  catalog:Catalog = new Catalog("","");

  constructor(public catalogService:CatalogService,public router:Router,public active:ActivatedRoute){

  }
  update(catalogToEdit:Catalog){
    this.catalogService.editCatalog(catalogToEdit).subscribe((res)=> {
      console.log(res);
      this.router.navigateByUrl("/catalogs");
    })
  }

  back(){
    this.router.navigateByUrl("/catalogs");
  }
  ngOnInit(): void {
    this.active.paramMap.subscribe(c => {
      this.id = c.get("id");
    })
    if (this.id == null){
      this.id = null
    }else{
      this.catalog.id   = this.id;
    }
    this.catalogService.getCatalog(this.catalog.id).subscribe((res) => {
      console.log(res);
      this.catalog= res;
      console.log(this.catalog);
    })
  }


}
