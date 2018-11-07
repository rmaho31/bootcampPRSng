import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { LineItemService } from '../../services/lineitem.service';
import { LineItem } from '../../classes/lineitem';
import { delay } from 'rxjs/internal/operators';

@Component({
  selector: 'app-lineitem-detail',
  templateUrl: './lineitem-detail.component.html',
  styleUrls: ['./lineitem-detail.component.css']
})
export class LineItemDetailComponent implements OnInit {

  lineitem: LineItem;
  title: string = "LineItem Detail";

  constructor(private route: ActivatedRoute,
    private lineitemsvc: LineItemService,
    private router: Router) { }

  ngOnInit() {
    let id = this.route.snapshot.params.id
    this.lineitemsvc.get(id)
      .subscribe(res => {
        console.log(res);
        this.lineitem = res.data;
      })
  }

  remove(): void {
    this.lineitemsvc.remove(this.lineitem)
      .subscribe(res => {
        this.router.navigateByUrl("/purchasereqeusts/list");
      });
  }

}
