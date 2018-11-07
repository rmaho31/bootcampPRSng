import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LineItemService } from '../../services/lineitem.service'
import { LineItem } from '../../classes/lineitem';
import { PurchaseRequestService } from 'src/app/services/purchaserequest.service';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/classes/product';

@Component({
  selector: 'app-lineitem-edit',
  templateUrl: './lineitem-edit.component.html',
  styleUrls: ['./lineitem-edit.component.css']
})
export class LineItemEditComponent implements OnInit {

  lineitem: LineItem;
  products: Product[];
  title: string = "Lineitem Edit"

  constructor(private lineitemsvc: LineItemService,
    private router: Router,
    private productsvc: ProductService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.lineitemsvc.get(this.route.snapshot.params.id)
      .subscribe(res => {
        if(res.code != 0){
          alert('Error Retrieving Data')
        } else {
          console.log(res);
          this.lineitem = res.data;
        }
      })
    this.productsvc.list()
    .subscribe(res => this.products = res.data);
  }

  save() {
    this.lineitemsvc.change(this.lineitem)
      .subscribe(res => {
        if(res.code != 0){
          alert('Save Failed');
        }
        this.router.navigateByUrl('/purchaserequests/list');
      })
  }

  compareFn(v1, v2): boolean {
    return v1.id === v2.id;
  }

}
