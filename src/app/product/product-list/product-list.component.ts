import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../classes/product';
import { SortPipe } from '../../pipe/sort.pipe';
import { SystemService } from 'src/app/services/system.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[];
  title: string = "Product List";
  sortBy: string = "id";
  searchTerm: string = '';
  direction: number = 1;

  constructor(private productSvc: ProductService,
    private syssvc: SystemService) { }

  ngOnInit() {
    this.productSvc.list().subscribe(res => {
                                  this.products = res.data;
      }
    );
  }

  setSortBy(column: string): void {
    this.sortBy = column;
    this.direction *= -1;
  }
}
