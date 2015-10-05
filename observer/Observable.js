export class Observable{
	constructor(){
		this._observertList = [];
	}

	addObserver(observer){
		this._observertList.push(observer);
	}

	removeObserver(obsever){
		this._observertList.splice(this._observertList.indexOf(observer), 1);
	}

	notifyObservers(data){
		for(let i = 0; i < this._observertList.length; i++){
			this._observertList[i].update(data);
		}
	}
}
