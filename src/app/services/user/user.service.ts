import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { User } from '../../models/user.model';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Subscription } from 'rxjs/Subscription';


var faker = require('faker');

interface UsersResponse{
	teams: User[];
}

@Injectable()
export class UserService implements OnDestroy{

	private _userSubscription: Subscription;
	private _users = new BehaviorSubject<User[]>([]);
	constructor(private http: HttpClient) { 

		this._userSubscription = this.http.get<UsersResponse>(environment.location.api.user).subscribe(data => {
			this._users.next(data.teams);
	    }, error => {
	    	throw error;
	    	
	    });

	}

	get users(): BehaviorSubject<User[]>{
		return this._users;
	}

	ngOnDestroy(){
		this._userSubscription.unsubscribe();
	}

}
