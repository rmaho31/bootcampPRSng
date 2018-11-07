import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { ProductService } from '../../services/product.service'
import { Product } from '../../classes/product'
import { VendorService } from 'src/app/services/vendor.service';
import { Vendor } from 'src/app/classes/vendor';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})

export class ProductCreateComponent implements OnInit {
  vendors: Vendor[];

  product: Product = new Product();
  title: string = "Product Create"

  constructor(private vendorsvc: VendorService,
    private productsvc: ProductService,
    private router: Router) { }

  ngOnInit() {
    this.vendorsvc.list()
      .subscribe(res => {
        this.vendors = res.data;
      });
  }

  create() {
    this.productsvc.add(this.product)
      .subscribe(res => {
        if (res.code != 0) {
          alert('Save Failed');
        }
        this.router.navigateByUrl('/products/list');
      })
  }


}
