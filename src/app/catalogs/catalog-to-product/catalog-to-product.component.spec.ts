import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogToProductComponent } from './catalog-to-product.component';

describe('CatalogToProductComponent', () => {
  let component: CatalogToProductComponent;
  let fixture: ComponentFixture<CatalogToProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatalogToProductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatalogToProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
