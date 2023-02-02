import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Catalog } from 'src/app/Models/catalog';
import { CatalogService } from 'src/app/service/catalog.service';

@Component({
  selector: 'app-catalog-details',
  templateUrl: './catalog-details.component.html',
  styleUrls: ['./catalog-details.component.css']
})
export class CatalogDetailsComponent implements OnInit {
id:string|null = "";
  Catalog:Catalog = new Catalog("","");
  constructor(public catalogService:CatalogService, public router:Router,public active:ActivatedRoute){

  }

  back(){
    this.router.navigateByUrl("/catalogs");
  }

  ngOnInit() {
    this.active.paramMap.subscribe(c => {
      this.id = c.get("id");
    })
    if (this.id == null){
      this.id = null
    }else{
      this.Catalog.id   = this.id;
    }
    this.catalogService.getCatalog(this.Catalog.id).subscribe((res) => {
      console.log(res);
      this.Catalog= res;
      console.log(this.Catalog);
    })
  }


}
