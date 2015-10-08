/*
	This design pattern focus on evaluating sentence in language.
	Application are in
*/

/**
	@abstract
*/
"use strict";

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Expresssion = (function () {
	function Expresssion() {
		_classCallCheck(this, Expresssion);
	}

	_createClass(Expresssion, [{
		key: "interpret",
		value: function interpret(context) {
			throw new Error("Must implement interpret()");
		}
	}]);

	return Expresssion;
})();

var Number = (function (_Expresssion) {
	_inherits(Number, _Expresssion);

	function Number(data) {
		_classCallCheck(this, Number);

		_get(Object.getPrototypeOf(Number.prototype), "constructor", this).call(this);
		this._data = data;
	}

	_createClass(Number, [{
		key: "interpret",
		value: function interpret() {
			return this._data;
		}
	}]);

	return Number;
})(Expresssion);

var Plus = (function (_Expresssion2) {
	_inherits(Plus, _Expresssion2);

	function Plus(left, right) {
		_classCallCheck(this, Plus);

		_get(Object.getPrototypeOf(Plus.prototype), "constructor", this).call(this);
		this._leftOperand = left;
		this._rightOperand = right;
	}

	_createClass(Plus, [{
		key: "interpret",
		value: function interpret() {
			return this._leftOperand.interpret() + this._rightOperand.interpret();
		}
	}]);

	return Plus;
})(Expresssion);

var Subtract = (function (_Expresssion3) {
	_inherits(Subtract, _Expresssion3);

	function Subtract(left, right) {
		_classCallCheck(this, Subtract);

		_get(Object.getPrototypeOf(Subtract.prototype), "constructor", this).call(this);
		this._leftOperand = left;
		this._rightOperand = right;
	}

	_createClass(Subtract, [{
		key: "interpret",
		value: function interpret() {
			return this._leftOperand.interpret() - this._rightOperand.interpret();
		}
	}]);

	return Subtract;
})(Expresssion);

new Expresssion();
var plus = new Plus(new Number(5), new Number(14)).interpret();
var subtract = new Subtract(new Number(5), new Number(14)).interpret();

console.log(plus);
console.log(subtract);