import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { VendorService } from '../../services/vendor.service';
import { Vendor } from '../../classes/vendor';
import { delay } from 'rxjs/internal/operators';

@Component({
  selector: 'app-vendor-detail',
  templateUrl: './vendor-detail.component.html',
  styleUrls: ['./vendor-detail.component.css']
})
export class VendorDetailComponent implements OnInit {

  vendor: Vendor;
  title: string = "Vendor Detail"

  constructor(private route: ActivatedRoute,
    private vendorsvc: VendorService,
    private router: Router) { }

  ngOnInit() {
    let id = this.route.snapshot.params.id
    this.vendorsvc.get(id)
      .subscribe(res => {
        console.log(res);
        this.vendor = res.data;
      })
  }

  remove(): void {
    this.vendorsvc.remove(this.vendor)
      .subscribe(res => {
        this.router.navigateByUrl("/vendors/list");
      });
  }

}
