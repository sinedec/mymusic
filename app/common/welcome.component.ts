import {Component} from 'angular2/core';

@Component({
	selector: 'welcome-component',
	template: `
		<div class="jumbotron">
			<h1>Welcome to MyMusic app</h1>
			<p></p>
			<p><a class="btn btn-primary btn-lg" role="button" (click)="showMoreInfo(moreInfo)" *ngIf="!moreInfo">Learn more</a></p>
			<div *ngIf="moreInfo">
				<p>Applicatin made with Angular 2</p>
			</div>
		</div>
	`
})
export class WelcomeComponent {
	public moreInfo: boolean = false;
	showMoreInfo(moreInfo:boolean){
		this.moreInfo = !moreInfo;
	}
}