import { Component, OnInit } from '@angular/core';
import { VendorService } from '../../services/vendor.service';
import { Vendor } from '../../classes/vendor';
import { SystemService } from 'src/app/services/system.service';
//import { SortPipe } from '@pipe/sort.pipe';

@Component({
  selector: 'app-vendor-list',
  templateUrl: './vendor-list.component.html',
  styleUrls: ['./vendor-list.component.css']
})
export class VendorListComponent implements OnInit {
  vendors: Vendor[];
  title: string = "Vendor List";
  sortBy: string = "name";
  direction: number = 1;

  constructor(private vendorSvc: VendorService,
    private syssvc: SystemService) { }

  ngOnInit() {
    this.vendorSvc.list().subscribe(res => {
      this.vendors = res.data;
    }
    );
  }

  setSortBy(column: string): void {
    this.sortBy = column;
    this.direction *= -1;
  }
}
