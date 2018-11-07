import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { UserService } from '../../services/user.service'
import { User } from '../../classes/user'

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})

export class UserCreateComponent implements OnInit {

  user: User = new User();
  password2: String = "";
  title: string = "Users Create"

  constructor(private usersvc: UserService,
              private router: Router) { }

  ngOnInit() {
  }

  create() {
    this.usersvc.add(this.user)
      .subscribe(res => {
        if(res.code != 0){
          alert('Save Failed');
        }
        this.router.navigateByUrl('/users/list');
      })
  }

  formCheck() {
    
  }
  

}
