import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VendorService } from '../../services/vendor.service'
import { Vendor } from '../../classes/vendor';

@Component({
  selector: 'app-vendor-edit',
  templateUrl: './vendor-edit.component.html',
  styleUrls: ['./vendor-edit.component.css']
})
export class VendorEditComponent implements OnInit {

  vendor: Vendor;
  title: string = "Vendor Edit"

  constructor(private vendorsvc: VendorService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.vendorsvc.get(this.route.snapshot.params.id)
      .subscribe(res => {
        if(res.code != 0){
          alert('Error Retrieving Data')
        } else {
          console.log(res);
          this.vendor = res.data;
        }
      })
  }

  save() {
    this.vendorsvc.change(this.vendor)
      .subscribe(res => {
        if(res.code != 0){
          alert("Error Updating");
        } else {
          console.log(res);
          this.router.navigateByUrl('/vendors/list');
        }
      })
  }

}
