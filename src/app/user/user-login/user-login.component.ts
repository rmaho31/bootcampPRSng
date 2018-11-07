import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { SystemService } from '../../services/system.service';
import { User } from '../../classes/user';
import { CookieService } from 'ngx-cookie-service';

@Component({
	selector: 'app-user-login',
	templateUrl: './user-login.component.html',
	styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
	message: string = '';
	user: User = new User();
	rememberMe: boolean;

	login() {
		this.userSvc.login(this.user)
			.subscribe(jsr => {
				if (jsr.code === 0) {
					if (this.rememberMe === true) {
						this.cookiesvc.set('userName', jsr.data.userName, 7,'/');
						this.cookiesvc.set('password', jsr.data.password,  7,'/');
					}
					console.log(jsr);
					this.user = jsr.data;
					this.sysSvc.rememberMe = this.rememberMe;
					this.sysSvc.user = this.user;
					this.sysSvc.loggedIn = true;
					this.router.navigateByUrl('/home');
				}
				else {
					this.message = "Invalid Username/Password combo.  Retry";
				}
			})
	}

	constructor(private cookiesvc: CookieService,
		private userSvc: UserService,
		private sysSvc: SystemService,
		private router: Router) { }

	ngOnInit() {
		if (this.sysSvc.loggedIn === false) {
			this.user.userName = this.cookiesvc.get('userName');
			this.user.password = this.cookiesvc.get('password');
			this.userSvc.login(this.user)
				.subscribe(jsr => {
					if (jsr.code === 0) {
						console.log(jsr.data)
						this.sysSvc.loggedIn = true;
						this.sysSvc.user = jsr.data;
						this.router.navigateByUrl('/home')
					} else {
						this.router.navigateByUrl('/users/login');
					}
				});
		}
	}

}
