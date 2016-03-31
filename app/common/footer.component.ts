import {Component} from 'angular2/core';

@Component({
	selector: 'footer-component',
	template: `
		<footer class="footer">
			<div class="container">
				<a class="text-muted" href="/">Denis Vasiliev {{year}}</a>
				<a class="text-muted" href="https://www.facebook.com/denismagician" target="_blank"><i class="fa fa-facebook"></i>Facebook</a>
			</div>
		</footer>
	`,
	styles: [`
		footer {

			position: absolute;
			bottom: 0;
			width: 100%;
			height: 60px;
			background-color: #f5f5f5;
		}
		.container{
			height: 60px;
		}
		a {
			height: 60px;
			line-height: 60px;
			margin-right: 5em;
		}
	`]
})
export class FooterComponent {
	private year: number = (new Date()).getFullYear();
}