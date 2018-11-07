import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { VendorService } from '../../services/vendor.service'
import { Vendor } from '../../classes/vendor'

@Component({
  selector: 'app-vendor-create',
  templateUrl: './vendor-create.component.html',
  styleUrls: ['./vendor-create.component.css']
})

export class VendorCreateComponent implements OnInit {

  vendor: Vendor = new Vendor();
  password2: String = "";
  title: string = "Vendor Create"

  constructor(private vendorsvc: VendorService,
              private router: Router) { }

  ngOnInit() {
  }

  create() {
    this.vendorsvc.add(this.vendor)
      .subscribe(res => {
        if(res.code != 0){
          alert('Save Failed');
        }
        this.router.navigateByUrl('/vendors/list');
      })
  }
  

}
