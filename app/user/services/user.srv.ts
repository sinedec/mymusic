import {Injectable} from 'angular2/core';
import {Observable} from 'rxjs/Observable';
import {IUser} from '../models/iuser';
import {User} from '../models/user';

@Injectable()
export class UserService {
	firebaseUrl:string = "https://mymusicapp.firebaseio.com/";
	firebaseRef:Firebase;

	constructor(){
		this.firebaseRef = new Firebase(this.firebaseUrl);
	}

	getUser () : Observable{
		return new Observable(observable => {
			this.firebaseRef.onAuth(authData => {
				// authData = this.firebaseRef.getAuth();
				let user;
				if (authData) {
					user = new User(authData);
				}

				observable.next(user);
			});
		});
	}

	login(email: string, password: string): Observable {
        return new Observable(observable => {
            this.firebaseRef.authWithPassword({
				email: email,
                password: password
            }, (error, authData) => {
                if (error) {
                    observable.error(error);
                } else {
                    observable.next(new User(authData));
                }
            })
        });
    }

	register(email:string, password:string, country?:string) : Observable{
		return new Observable(observable => {
			this.firebaseRef.createUser({
				email: email,
				password: password,
				country: country
			}, (error, userData) => {
				if (error) {
					observable.error(error);
				} else {
                    this.login(email, password)
                        .subscribe(user => {
                            observable.next(user);
                        });
                }
			});
		});
	}

	logout():Observable {
		return new Observable(observable => {
			this.firebaseRef.unauth();
			observable.next();
		})
	}
}