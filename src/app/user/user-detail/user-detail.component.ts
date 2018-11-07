import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { UserService } from '../../services/user.service';
import { User } from '../../classes/user';
import { delay } from 'rxjs/internal/operators';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  user: User;
  title: string = "User Detail"

  constructor(private route: ActivatedRoute,
    private usersvc: UserService,
    private router: Router) { }

  ngOnInit() {
    let id = this.route.snapshot.params.id
    this.usersvc.get(id)
      .subscribe(res => {
        console.log(res);
        this.user = res.data;
      })
  }

  remove(): void {
    this.usersvc.remove(this.user)
      .subscribe(res => {
        this.router.navigateByUrl("/users/list");
      });
  }

}
