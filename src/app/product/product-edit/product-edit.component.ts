import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../services/product.service'
import { Product } from '../../classes/product';
import { Vendor } from 'src/app/classes/vendor';
import { VendorService } from 'src/app/services/vendor.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  vendors: Vendor[];
  title: string = "Product Edit"  
  product: Product;

  constructor(private productsvc: ProductService,
    private route: ActivatedRoute,
    private router: Router,
    private vendorsvc: VendorService) { }

  ngOnInit() {
    this.productsvc.get(this.route.snapshot.params.id)
      .subscribe(res => {
        if(res.code != 0){
          alert('Error Retrieving Data')
        } else {
          console.log(res);
          this.product = res.data;
        }
      })
      this.vendorsvc.list()
      .subscribe(res => {
        this.vendors = res.data;
      });
  }

  save() {
    this.productsvc.change(this.product)
      .subscribe(res => {
        if(res.code != 0){
          alert("Error Updating");
        } else {
          console.log(res);
          this.router.navigateByUrl('/products/list');
        }
      })
  }

  compareFn(v1, v2): boolean {
    return v1.id === v2.id;
  }

}
