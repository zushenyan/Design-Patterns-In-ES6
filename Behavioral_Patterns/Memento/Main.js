/*
	Memento pattern implements three objects:
	* Originator - an object has internal state.
	* Caretaker - do something with originator object. Requests data from memento once needs to restore originator's state.
	* Memento - a history storage for originator.
*/

// originator
class Person{
	constructor(name){
		this.setName(name);
	}

	setName(name){
		this._name = name;
	}

	getName(){
		return this._name;
	}

	toJson(){
		return JSON.stringify(this);
	}

	restoreFromJson(json){
		let obj = JSON.parse(json);
		this._name = obj._name;
	}
}

class Memento{
	constructor(){
		this._history = [];
	}

	add(person){
		return this._history.push(person.toJson()) - 1;
	}

	get(index){
		return this._history[index];
	}
}

// code belows are caretaker
let p1 = new Person("John");
let p2 = new Person("Mary");
let memento = new Memento();

console.log(p1.getName());
console.log(p2.getName());

let keyforp1 = memento.add(p1);
let keyforp2 = memento.add(p2);

p1.setName("shit");
p2.setName("fuck");

console.log(p1.getName());
console.log(p2.getName());

p1.restoreFromJson(memento.get(keyforp1));
p2.restoreFromJson(memento.get(keyforp2));

console.log(p1.getName());
console.log(p2.getName());
