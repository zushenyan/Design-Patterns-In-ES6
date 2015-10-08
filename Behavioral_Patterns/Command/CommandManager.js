export class CommandManager {
	constructor(){
		this._history = [];
	}

	exec(command, ...args){
		this._history.push(command);
		command.execute(...args);
	}

	getHistory(){
		return this._history;
	}
}
