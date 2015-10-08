/*
	Our element(target) object accepts a visitor object to execute algorithm depends on what it needs.
	By this way, execution algorithm can vary as when visitor varies.

	Because of JavaScript's flexibility, we don't need lots of classes to do the job like in class based language.
	We can do this by simpliy swapping out function to get what algorithm we need.
*/

"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Employee = (function () {
	function Employee(name, salary) {
		_classCallCheck(this, Employee);

		this._name = name;
		this.setSalary(salary);
	}

	_createClass(Employee, [{
		key: "setSalary",
		value: function setSalary(salary) {
			this._salary = salary;
		}
	}, {
		key: "getSalary",
		value: function getSalary() {
			return this._salary;
		}
	}, {
		key: "accept",
		value: function accept(visitor) {
			visitor.call(this);
		}
	}]);

	return Employee;
})();

function extraSalary() {
	this.setSalary(this.getSalary() * 2);
}

var emp = new Employee("John", 30000);

console.log("before being visited: " + emp.getSalary());

emp.accept(extraSalary);

console.log("after being visited: " + emp.getSalary());