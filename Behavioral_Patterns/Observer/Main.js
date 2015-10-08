import { Observable } from "./Observable";
import { Observer } from "./Observer";

function mixin(src, dest){
	src = src.prototype;
	dest = dest.prototype;

	Object.getOwnPropertyNames(src).forEach((name) => {
		if(name !== "constructor"){
			Object.defineProperty(dest, name, Object.getOwnPropertyDescriptor(src, name));
		}
	});
}

/*
	you can use inheritance method directly.
*/
class Event1 extends Observer{
	constructor(name){
		super();
		this._name = name;
	}

	update(data){
		console.log(this._name + " : " + data);
	}
}

/*
	or by using mixin(implement mehod) if you can't directly inherit Observer.
*/
class Event2{
	constructor(name){
		this._name = name;
	}
}

mixin(Observer, Event2);

Event2.prototype.update = function(data){
	console.log(this._name + " : " + data);
}

/*
	=====================
	 main program starts
	=====================
*/
let eventManager = new Observable();
let e1 = new Event1("e1");
let e2 = new Event2("e2");

eventManager.addObserver(e1);
eventManager.addObserver(e2);

eventManager.notifyObservers("meow!");
