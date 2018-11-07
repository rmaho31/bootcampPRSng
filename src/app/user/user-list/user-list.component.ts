import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../classes/user';
import { BoolDisplayPipe } from '../../pipe/bool-display.pipe';
import { SortPipe } from '../../pipe/sort.pipe';
import { SystemService } from 'src/app/services/system.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: User[];
  title: string = "User List";
  sortBy: string = "userName";
  direction: number = 1;

  constructor(private userSvc: UserService,
    private syssvc: SystemService) { }

  ngOnInit() {
    this.userSvc.list().subscribe(res => {
      this.users = res.data;
    }
    );
  }

  setSortBy(column: string): void {
    this.sortBy = column;
    this.direction *= -1;
  }
}
