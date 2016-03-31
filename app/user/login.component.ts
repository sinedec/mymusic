import {Component} from 'angular2/core';
import {Router} from 'angular2/router';
import {UserService} from './services/user.srv';

@Component({
	selector: 'login-component',
	template: `
		<form #loginForm="ngForm">
			<div class="alert alert-danger" role="alert" *ngIf="error">{{error}}</div>
			<div class="form-group">
				<label for="emailInput">Email address</label>
				<input type="email" id="emailInput" placeholder="Email" class="form-control" required ngControl="userName" #email="ngForm"/>
				<div [hidden]="email.valid || email.pristine" class="alert alert-danger">Email required</div>
			</div>
			<div class="form-group">
				<label for="password">Password</label>
				<input type="password" placeholder="Password" class="form-control" required ngControl="password" #password="ngForm"/>
				<div [hidden]="password.valid || password.pristine" class="alert alert-danger">Password required</div>
			</div>
			<button type="submit" class="btn btn-devault" (click)="login(email.value, password.value)" [disabled]="!loginForm.form.valid">Login</button>
		</form>
	`,
	providers:[UserService]
})
export class LoginComponent {
	public error: string;

	constructor(private userService:UserService, private router:Router){}

	public login(email:string, password:string){
		this.userService.login(email, password)
			.subscribe(user => {
				this.router.navigateByUrl("/");
			}, error => {
				this.error = error;
			});
	}
}