import {Injectable} from 'angular2/core';
import {Observable} from 'rxjs/Observable';
import {Http} from 'angular2/http';
import 'rxjs/add/operator/map';
import {ICountry} from '../models/icountry';
import {Country} from '../models/country';

@Injectable()
export class CountryService {
	constructor(private http:Http){}

	getCountries(){
		return new Observable(observable => {
			this.http.get("https://restcountries.eu/rest/v1/all")
				.map(function(res) {
					res = res.json();
					var countries: Array<ICountry> = [];
					res.forEach(data => {
						countries.push(new Country(data.name, data.alpha2Code));
					});
					return countries;
				})
				.subscribe(countries => {
					observable.next(countries);
				});
		});
	}
}