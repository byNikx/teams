import { Component, OnInit, OnDestroy } from '@angular/core';
import { LayoutService } from '../../services/layout/layout.service';
import { UserService } from '../../services/user/user.service';
import { UtilService } from '../../services/util/util.service';
import { User } from '../../models/user.model';
import { Team } from '../../models/team.model';
import { environment } from '../../../environments/environment';

var faker = require('faker');
//const appData = require('../../static-data/teams.json');

import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'bd-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {

	bgColor: string;
	colorArray = ['#3f51b5', '#F50057', '#673AB7', '#004D40', '#4CAF50', '#E65100', '#607D8B'];
	private _userSubscription: Subscription;
	users: User[];
	teams = [];
	partition = {left: null, right: null};
	count = {

	};
	constructor(private layout: LayoutService, private userService: UserService, private util: UtilService) { 

		this.getRandomColor();
		this._userSubscription = this.userService.users.subscribe((users)=>{
			this.prepareTeams(users)
				.doPartition(this.teams)
				.prepareDashboard(this.teams);
		});
	}

	prepareTeams(data){

		data.forEach((team)=>{
			let _team = new Team();
				_team.name = team.name;
				_team.area = team.backlog;
				_team.avatar = environment.location.dashboard.teamAvatar+(team.avatar || 'team-default.svg');
				_team.members = team.members.map((member)=>{
					return Object.assign(member, {avatar:environment.location.dashboard.userAvatar+member.img});
				});
				this.teams.push(_team);
		});
		return this;
	}

	doPartition(data){

		let totalTeams = data.length || 0;
		if(!totalTeams)	this;

		this.partition.left = data.filter((team, index)=>{
			if(index+1<=Math.ceil(totalTeams/2))
				return team;
		});
		this.partition.right = data.filter((team, index)=>{
			if(index+1>Math.ceil(totalTeams/2) && index+1<=totalTeams)
				return team;
		});
		return this;
	}

	getRandomColor(){
		let color = this.colorArray[Math.floor(Math.random()*this.colorArray.length)];
		if(color == this.bgColor){
			this.getRandomColor();
		}else{
			this.bgColor = color;
		}
	}

	prepareDashboard(data){
		Object.assign(this.count, {departments: 3});
		Object.assign(this.count, {teams: data.length});
		
		Object.assign(this.count, {scrumMasters: data.map((team)=>{
				let scrumMasters = team.members.filter((member, index)=>{
					if(member.role == "scrum_master"){
						return member;
					}
				});

				if(scrumMasters.length>0)
					return scrumMasters[0];
				
			}).reduce((accumulator, currentValue)=>{

				if(!!currentValue){
					let key = [currentValue.name, currentValue.img, currentValue.role].join('|');

					if(accumulator.temp.indexOf(key) < 0){
						accumulator.temp.push(key);
						accumulator.out.push(currentValue);
					}
				}
				return accumulator;

			}, {temp:[], out:[]}).out.length
		});

		Object.assign(this.count, {members: data.reduce((accumulator, team)=>{

			team.members.forEach((member)=>{
				let key = [member.name, member.img].join('|');

				if(accumulator.temp.indexOf(key) < 0){
					accumulator.temp.push(key);
					accumulator.out.push(member);
				}
			});

			return accumulator;

			}, {temp:[], out:[]}).out.length

		});
	}

	ngOnInit() {
		setInterval(()=>{
			this.getRandomColor();
		}, 30*1000);
	}

	ngOnDestroy(){
		this._userSubscription.unsubscribe();
	}

}
