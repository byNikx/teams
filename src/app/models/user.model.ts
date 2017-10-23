export class User {
	private _name: string;
	private _avatar: string;
	private _type: string;
	private _role: string;

	constructor(){}

	get name(): string {
		return this._name;
	};

	set name(name) {
		this._name = name;
	};

	get avatar(): string {
		return this._avatar;
	}

	set avatar(avatar) {
		this._avatar = avatar;
	}

	get type(): string {
		return this._type;
	}

	set type(type) {
		this._type = type;
	}

	get role(): string {
		return this._role;
	}

	set role(role) {
		this._role = role;
	}
}
