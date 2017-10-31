import { Component, OnInit, OnDestroy } from '@angular/core';
import { LayoutService } from '../../services/layout/layout.service';
import { UserService } from '../../services/user/user.service';
import { UtilService } from '../../services/util/util.service';
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
	count = {

	};
	constructor(private layout: LayoutService, private userService: UserService, private util: UtilService) { 

		this.getRandomColor();
		this._usersWatcher = this.userService.users.subscribe((users)=>{
			this.users = users;
		});

		appData.forEach((team)=>{
			let _team = new Team();
				_team.name = team.name;
				_team.area = team.backlog;
				_team.avatar = team.avatar;
				_team.members = team.members.map((member)=>{
					let localtion ="./assets/img/users/";
					return Object.assign(member, {avatar:localtion+member.img});
				});
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
		}, 10*1000);

		Object.assign(this.count, {departments: 3});
		Object.assign(this.count, {teams: appData.length});
		
		Object.assign(this.count, {scrumMasters: appData.filter((team)=>{
				let scrumMasters = team.members.filter((member)=>{
					return member.role == "scrum_master";
				});

				if(!!scrumMasters.length)
					return scrumMasters;
			}).length
		});

		console.log('this.count.scrumMasters', this.count);

	}

	ngOnDestroy(){
		this._usersWatcher.unsubscribe();
	}

}
