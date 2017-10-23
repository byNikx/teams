import { Component, OnInit, OnDestroy } from '@angular/core';
import { LayoutService } from '../../services/layout/layout.service';
import { UserService } from '../../services/user/user.service';
import { User } from '../../models/user.model';
import { Team } from '../../models/team.model';
var faker = require('faker');
const appData = require('../../static-data/teams.json');

import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'bd-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {

	bgColor: string;
	colorArray = ['#3f51b5', '#F50057', '#673AB7', '#004D40', '#4CAF50', '#E65100', '#607D8B'];
	private _usersWatcher: Subscription;
	users: User[];
	teams = [];
	partition = {left: null, right: null};
	constructor(private layout: LayoutService, private userService: UserService) { 

		this.getRandomColor();
		this._usersWatcher = this.userService.users.subscribe((users)=>{
			this.users = users;
		});

		appData.forEach((team)=>{
			let _team = new Team();
				_team.name = team.name;
				_team.area = team.backlog
				_team.members = team.members.map((member)=>{
					return Object.assign(member, {avatar:faker.internet.avatar()});
				});
//				_team.members[0].role = 'scrum_master';

				this.teams.push(_team);
		});
		this.doPartition();

	}


	doPartition(){
		let totalTeams = this.teams.length || 0;

		if(!totalTeams)	return;

		this.partition.left = this.teams.filter((team, index)=>{
			if(index+1<=Math.ceil(totalTeams/2))
				return team;
		});
		this.partition.right = this.teams.filter((team, index)=>{
			if(index+1>Math.ceil(totalTeams/2) && index+1<=totalTeams)
				return team;
		});

	}


	getRandomColor(){
		let color = this.colorArray[Math.floor(Math.random()*this.colorArray.length)];
		if(color == this.bgColor){
			this.getRandomColor();
		}else{
			this.bgColor = color;
		}
	}

	ngOnInit() {
		setInterval(()=>{
			this.getRandomColor();
		}, 60*1000);
	}

	ngOnDestroy(){
		this._usersWatcher.unsubscribe();
	}

}
