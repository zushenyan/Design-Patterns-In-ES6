/*
	This design pattern focus on evaluating sentence in language.
	Application are in query language such as SQL, programming language...
*/

/**
	@interface
*/
class Expresssion{
	interpret(context){ throw new Error("Must implement interpret()"); }
}

class Number extends Expresssion{
	constructor(data){
		super();
		this._data = data;
	}

	interpret(){
		return this._data;
	}
}

class Plus extends Expresssion{
	constructor(left, right){
		super();
		this._leftOperand = left;
		this._rightOperand = right;
	}

	interpret(){
		return this._leftOperand.interpret() + this._rightOperand.interpret();
	}
}

class Subtract extends Expresssion{
	constructor(left, right){
		super();
		this._leftOperand = left;
		this._rightOperand = right;
	}

	interpret(){
		return this._leftOperand.interpret() - this._rightOperand.interpret();
	}
}

let plus = new Plus(new Number(5), new Number(14)).interpret();
let subtract = new Subtract(new Number(5), new Number(14)).interpret();

console.log(plus);
console.log(subtract);
