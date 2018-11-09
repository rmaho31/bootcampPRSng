import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { PurchaseRequestService } from '../../services/purchaserequest.service';
import { PurchaseRequest } from '../../classes/purchaserequest';
import { SystemService } from 'src/app/services/system.service';

@Component({
  selector: 'app-purchaserequest-detail',
  templateUrl: './purchaserequest-detail.component.html',
  styleUrls: ['./purchaserequest-detail.component.css']
})
export class PurchaseRequestDetailComponent implements OnInit {

  purchaserequest: PurchaseRequest;
  title: string = "PurchaseRequest Detail"

  constructor(private route: ActivatedRoute,
    private purchaserequestsvc: PurchaseRequestService,
    private syssvc: SystemService,
    private router: Router) { }

  ngOnInit() {
    let id = this.route.snapshot.params.id
    this.purchaserequestsvc.get(id)
      .subscribe(res => {
        console.log(res);
        this.purchaserequest = res.data;
      })
  }

  remove(): void {
    this.purchaserequestsvc.remove(this.purchaserequest)
      .subscribe(res => {
        this.router.navigateByUrl("/purchaserequests/list");
      });
  }

  submit(): void {
    this.purchaserequestsvc.subforReview(this.purchaserequest)
      .subscribe(res => {
        this.router.navigateByUrl("/purchaserequests/list")
      });
  }

}
