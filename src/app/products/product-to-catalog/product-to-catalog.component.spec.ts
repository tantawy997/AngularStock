import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductToCatalogComponent } from './product-to-catalog.component';

describe('ProductToCatalogComponent', () => {
  let component: ProductToCatalogComponent;
  let fixture: ComponentFixture<ProductToCatalogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductToCatalogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductToCatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
