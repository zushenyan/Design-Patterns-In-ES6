/*
	Memento pattern implements three objects:
	* Originator - an object has internal state.
	* Caretaker - do something with originator object. Requests data from memento once needs to restore originator's state.
	* Memento - a history storage for originator.
*/

// originator
"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Person = (function () {
	function Person(name) {
		_classCallCheck(this, Person);

		this.setName(name);
	}

	_createClass(Person, [{
		key: "setName",
		value: function setName(name) {
			this._name = name;
		}
	}, {
		key: "getName",
		value: function getName() {
			return this._name;
		}
	}, {
		key: "toJson",
		value: function toJson() {
			return JSON.stringify(this);
		}
	}, {
		key: "restoreFromJson",
		value: function restoreFromJson(json) {
			var obj = JSON.parse(json);
			this._name = obj._name;
		}
	}]);

	return Person;
})();

var Memento = (function () {
	function Memento() {
		_classCallCheck(this, Memento);

		this._history = [];
	}

	// code belows are caretaker

	_createClass(Memento, [{
		key: "add",
		value: function add(person) {
			return this._history.push(person.toJson()) - 1;
		}
	}, {
		key: "get",
		value: function get(index) {
			return this._history[index];
		}
	}]);

	return Memento;
})();

var p1 = new Person("John");
var p2 = new Person("Mary");
var memento = new Memento();

console.log(p1.getName());
console.log(p2.getName());

var keyforp1 = memento.add(p1);
var keyforp2 = memento.add(p2);

p1.setName("shit");
p2.setName("fuck");

console.log(p1.getName());
console.log(p2.getName());

p1.restoreFromJson(memento.get(keyforp1));
p2.restoreFromJson(memento.get(keyforp2));

console.log(p1.getName());
console.log(p2.getName());