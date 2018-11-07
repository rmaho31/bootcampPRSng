import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PurchaseRequestService } from '../../services/purchaserequest.service'
import { PurchaseRequest } from '../../classes/purchaserequest';

@Component({
  selector: 'app-purchaserequest-edit',
  templateUrl: './purchaserequest-edit.component.html',
  styleUrls: ['./purchaserequest-edit.component.css']
})
export class PurchaseRequestEditComponent implements OnInit {

  purchaserequest: PurchaseRequest;
  title: string = "PurchaseRequest Edit"

  constructor(private purchaserequestsvc: PurchaseRequestService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.purchaserequestsvc.get(this.route.snapshot.params.id)
      .subscribe(res => {
        if(res.code != 0){
          alert('Error Retrieving Data')
        } else {
          console.log(res);
          this.purchaserequest = res.data;
        }
      })
  }

  save() {
    this.purchaserequestsvc.change(this.purchaserequest)
      .subscribe(res => {
        if(res.code != 0){
          alert("Error Updating");
        } else {
          console.log(res);
          this.router.navigateByUrl('/purchaserequests/list');
        }
      })
  }

}
