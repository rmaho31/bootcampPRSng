import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ProductService } from '../../services/product.service';
import { Product } from '../../classes/product';
import { delay } from 'rxjs/internal/operators';
import { SystemService } from 'src/app/services/system.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product: Product;
  title: string = "Product Detail"

  constructor(private route: ActivatedRoute,
    private productsvc: ProductService,
    private syssvc: SystemService,
    private router: Router) { }

  ngOnInit() {
    let id = this.route.snapshot.params.id
    this.productsvc.get(id)
      .subscribe(res => {
        console.log(res);
        this.product = res.data;
      })
  }

  remove(): void {
    this.productsvc.remove(this.product)
      .subscribe(res => {
        this.router.navigateByUrl("/products/list");
      });
  }

}
