import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../services/user.service'
import { User } from '../../classes/user';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  user: User;
  title: string = "User Edit"

  constructor(private usersvc: UserService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.usersvc.get(this.route.snapshot.params.id)
      .subscribe(res => {
        if(res.code != 0){
          alert('Error Retrieving Data')
        } else {
          console.log(res);
          this.user = res.data;
        }
      })
  }

  save() {
    this.usersvc.change(this.user)
      .subscribe(res => {
        if(res.code != 0){
          alert("Error Updating");
        } else {
          console.log(res);
          this.router.navigateByUrl('/users/list');
        }
      })
  }

}
