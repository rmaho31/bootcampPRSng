import { Component, OnInit } from '@angular/core';
import { LineItemService } from '../../services/lineitem.service';
import { LineItem } from '../../classes/lineitem';
import { ActivatedRoute } from '@angular/router';
import { PurchaseRequest } from 'src/app/classes/purchaserequest';
import { PurchaseRequestService } from 'src/app/services/purchaserequest.service';
import { SortPipe } from '../../pipe/sort.pipe';
import { SystemService } from 'src/app/services/system.service';

@Component({
  selector: 'app-lineitem-list',
  templateUrl: './lineitem-list.component.html',
  styleUrls: ['./lineitem-list.component.css']
})
export class LineItemListComponent implements OnInit {
  lineitems: LineItem[];
  purchaseRequest: PurchaseRequest;
  title: string = "Line Item List";
  sortBy: string = "";

  constructor(private lineitemSvc: LineItemService,
    private purchaserequestsvc: PurchaseRequestService,
    private syssvc: SystemService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.lineitemSvc.getPrli(this.route.snapshot.params.id).subscribe(res => {
      this.lineitems = res.data;
    }
    );
    this.purchaserequestsvc.get(this.route.snapshot.params.id).subscribe(res => {
      this.purchaseRequest = res.data;
    });
  }

  setSortBy(column: string): void {
    this.sortBy = column;
  }
}
