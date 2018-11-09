import { Component, OnInit, Input } from '@angular/core';
import { Menu } from '../../menu'
import { SystemService } from 'src/app/services/system.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent implements OnInit {
  private _items: any;

  public get items(): any {
    return this._items;
  }

  @Input() public set items(menu: any) {
    this._items = [{ route: "/" + menu.title.toLocaleLowerCase() + "/list", display: menu.title.toLocaleLowerCase(), title: "List" },
    { route: "/" + menu.title.toLocaleLowerCase() + "/create", display: menu.title.toLocaleLowerCase(), title: "Create" }]
  }


  @Input() menu: Menu;
  constructor(private cookiesvc: CookieService,
    private syssvc: SystemService,
    private router: Router) { }

  ngOnInit() {
  }

  logout() {
    if (confirm("Are you sure you want to logout?")) {
      this.syssvc.loggedIn = false;
      this.syssvc.rememberMe = false;
      this.syssvc.user = null;
      this.cookiesvc.delete('userName');
      this.cookiesvc.delete('password');
      this.router.navigateByUrl('users/login')
      console.log('success')
    } else {
      this.router.navigateByUrl('users/list')
    }
  }

}
