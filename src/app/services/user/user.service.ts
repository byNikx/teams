import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { User } from '../../models/user.model';
var faker = require('faker');


@Injectable()
export class UserService {

	_users = new BehaviorSubject<User[]>(null);
	constructor() { 		
		this._users.next(this.getDummyData());
	}

	get users(): BehaviorSubject<User[]>{
		return this._users;
	}

	getDummyData(){
		let i = 0;
		let dummyUserData = [];
		while(i++<8) {
			let user = new User();
				user.name = faker.name.findName();
				user.type = 'developer';
				user.avatar = faker.internet.avatar();
			dummyUserData.push(user);
		}
		return dummyUserData;
	}

}
