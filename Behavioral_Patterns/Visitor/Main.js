/*
	Our element(target) object accepts a visitor object to execute algorithm depends on what it needs.
	By this way, execution algorithm can vary as when visitor varies.

	Because of JavaScript's flexibility, we don't need lots of classes to do the job like in class based language.
	We can do this by simpliy swapping out function to get what algorithm we need.
*/

class Employee{
	constructor(name, salary){
		this._name = name;
		this.setSalary(salary);
	}

	setSalary(salary){
		this._salary = salary;
	}

	getSalary(){
		return this._salary;
	}

	accept(visitor){
		visitor.call(this);
	}
}

function extraSalary(){
	this.setSalary(this.getSalary() * 2);
}

let emp = new Employee("John", 30000);

console.log("before being visited: " + emp.getSalary());

emp.accept(extraSalary);

console.log("after being visited: " + emp.getSalary());
