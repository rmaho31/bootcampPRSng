import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { PurchaseRequestService } from '../../services/purchaserequest.service'
import { PurchaseRequest } from '../../classes/purchaserequest'
import { SystemService } from 'src/app/services/system.service';

@Component({
  selector: 'app-purchaserequest-create',
  templateUrl: './purchaserequest-create.component.html',
  styleUrls: ['./purchaserequest-create.component.css']
})

export class PurchaseRequestCreateComponent implements OnInit {

  purchaserequest: PurchaseRequest = new PurchaseRequest();
  title: string = "PurchaseRequest Create"

  constructor(private purchaserequestsvc: PurchaseRequestService,
              private systemsvc: SystemService,
              private router: Router) { }

  ngOnInit() {
  }

  create() {
    this.purchaserequest.user = this.systemsvc.getUser();
    this.purchaserequestsvc.add(this.purchaserequest)
      .subscribe(res => {
        if(res.code != 0){
          alert('Save Failed');
        }
        this.router.navigateByUrl('/purchaserequests/list');
      })
  }
  

}
