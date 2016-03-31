import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES, Router} from 'angular2/router';
import {IUser} from '../user/models/iuser';
import {UserService} from '../user/services/user.srv';
import {SearchComponent} from './search.component';

@Component({
	selector: 'header-component',
	template: `
		<nav class="navbar navbar-inverse header-component">
			<div class="container">
				<div class="navbar-header">
	              <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
	                <span class="sr-only">Toggle navigation</span>
	                <span class="icon-bar"></span>
	                <span class="icon-bar"></span>
	                <span class="icon-bar"></span>
	              </button>
	              <a class="navbar-brand" href="#">MyMusic</a>
            	</div>

				<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
	              <form class="navbar-form navbar-left" role="search">
	                <search-component (searchChange)="search($event)"></search-component>
	              </form>
	              <ul class="nav navbar-nav navbar-right">
	                <li><button type="button" class="btn btn-info navbar-btn" *ngIf="!user" [routerLink]="['Login']">Login</button></li>
	                <li><button type="button" class="btn btn-success navbar-btn" *ngIf="!user" [routerLink]="['Register']">Register</button></li>
	                <li><a href="#" *ngIf="user">{{ user.email }}</a></li>
	                <li><a href="#" *ngIf="user" (click)="logout()">Logout</a></li>
	              </ul>
				</div>
			</div>
		</nav>
	`,
	providers: [UserService],
	directives: [ROUTER_DIRECTIVES, SearchComponent],
	styles: [`
		.header-component .navbar-nav .btn {
			margin-left: 1em;
		}
	`]
})
export class HeaderComponent {
	public user: IUser;

	constructor(private userService:UserService, private router:Router){
		this.userService.getUser()
			.subscribe(user => {
				this.user = user;
			});
	}

	search($event){
		this.router.navigate(["Albums", { query: $event, page: 0 }]);
	}

	logout(){
		this.userService.logout()
			.subscribe(()=> {
				this.router.navigateByUrl("/");
			})
	}
}

