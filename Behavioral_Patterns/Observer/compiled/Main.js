"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _Observable = require("./Observable");

var _Observer2 = require("./Observer");

function mixin(src, dest) {
	src = src.prototype;
	dest = dest.prototype;

	Object.getOwnPropertyNames(src).forEach(function (name) {
		if (name !== "constructor") {
			Object.defineProperty(dest, name, Object.getOwnPropertyDescriptor(src, name));
		}
	});
}

/*
	you can use inheritance method directly.
*/

var Event1 = (function (_Observer) {
	_inherits(Event1, _Observer);

	function Event1(name) {
		_classCallCheck(this, Event1);

		_get(Object.getPrototypeOf(Event1.prototype), "constructor", this).call(this);
		this._name = name;
	}

	/*
 	or by using mixin(implement mehod) if you can't directly inherit Observer.
 */

	_createClass(Event1, [{
		key: "update",
		value: function update(data) {
			console.log(this._name + " : " + data);
		}
	}]);

	return Event1;
})(_Observer2.Observer);

var Event2 = function Event2(name) {
	_classCallCheck(this, Event2);

	this._name = name;
};

mixin(_Observer2.Observer, Event2);

Event2.prototype.update = function (data) {
	console.log(this._name + " : " + data);
};

/*
	=====================
	 main program starts
	=====================
*/
var eventManager = new _Observable.Observable();
var e1 = new Event1("e1");
var e2 = new Event2("e2");

eventManager.addObserver(e1);
eventManager.addObserver(e2);

eventManager.notifyObservers("meow!");