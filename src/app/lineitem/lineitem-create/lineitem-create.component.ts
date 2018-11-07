import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
import { LineItemService } from '../../services/lineitem.service'
import { LineItem } from '../../classes/lineitem'
import { PurchaseRequestService } from 'src/app/services/purchaserequest.service';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/classes/product';

@Component({
  selector: 'app-lineitem-create',
  templateUrl: './lineitem-create.component.html',
  styleUrls: ['./lineitem-create.component.css']
})

export class LineItemCreateComponent implements OnInit {

  lineitem: LineItem = new LineItem();
  products: Product[];
  title: string = "LineItem Create"

  constructor(private lineitemsvc: LineItemService,
              private router: Router,
              private purchaserequestsvc: PurchaseRequestService,
              private productsvc: ProductService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    console.log(this.route.snapshot.params.id)
    this.purchaserequestsvc.get(this.route.snapshot.params.id)
    .subscribe(res => this.lineitem.purchaseRequest = res.data);
    this.productsvc.list()
    .subscribe(res => this.products = res.data);
  }

  create() {
    this.lineitemsvc.add(this.lineitem)
      .subscribe(res => {
        if(res.code != 0){
          alert('Save Failed');
        }
        this.router.navigateByUrl('/purchaserequests/list');
      })
  }
  

}
