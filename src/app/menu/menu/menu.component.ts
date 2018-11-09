import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, UrlSegment } from '@angular/router';
import { Menu } from '../menu'
import { GsearchService } from 'src/app/services/gsearch.service';
import { ModalService } from 'src/app/services/modal.service';
import { SystemService } from 'src/app/services/system.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  searchText: string = "";
  searchRes: any[];

  menus: Menu[] = [
    new Menu("Users"),
    new Menu("Vendors"),
    new Menu("Products"),
    new Menu("PurchaseRequests")

  ]

  constructor(private route: ActivatedRoute,
    private gsearchsvc: GsearchService,
    private syssvc: SystemService,
    private modalsvc: ModalService) { }

  ngOnInit() {
  }

  openModal(id: string) {
    this.modalsvc.open(id);
    this.gsearchsvc.googleS(this.searchText).subscribe(res => {
      this.searchRes = res.items;
      console.log(res.items[0].pagemap.cse_image[0].src);
    })
  }

  closeModal(id: string) {
    this.modalsvc.close(id);
  }

}
