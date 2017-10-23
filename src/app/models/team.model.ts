import { User } from './user.model';

export class Team {
	private _name: string;
	private _members: User[];
	private _area: string;

	constructor() {}

	get name(): string {
		return this._name;
	};

	set name(name) {
		this._name = name;
	};

	get members(): User[] {
		return this._members;
	};

	set members(members) {
		this._members = members;
	};

	get area(): string {
		return this._area;
	};

	set area(area) {
		this._area = area;
	};
}
