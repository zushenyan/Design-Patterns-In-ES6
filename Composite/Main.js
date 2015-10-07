/*
	Composite pattern means a group of objects needs to be treated as a single instance of object.
	This compose objects into tree structure to represent part-whole hierachies.
*/

class Node {
	constructor(name){
		this._children = [];
		this._name = name;
	}

	add(node){
		this._children.push(node);
	}

	remove(node){
		let index = this._children.indexOf(node);
		let result = index ? this._children.splice(index, 1) : null;
		return result
	}

	print(){
		console.log("I am node: " + this._name);
		for(let i = 0; i < this._children.length; i++){
			let child = this._children[i];
			if(child){
				child.print();
			}
		}
	}
}

let child1 = new Node("child1");
let child2 = new Node("child2");
let child3 = new Node("child3");
let child4 = new Node("child4");

let parent1 = new Node("parent1");
let parent2 = new Node("parent2");

let ancenstor = new Node("ancenstor");

parent1.add(child1);
parent1.add(child2);

parent2.add(child3);
parent2.add(child4);

ancenstor.add(parent1);
ancenstor.add(parent2);

ancenstor.print();
