/*
	If you think some features can be shared among particular objects, use Mixin.
*/

"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function mixin(src, dest) {
	src = src.prototype;
	dest = dest.prototype;

	Object.getOwnPropertyNames(src).forEach(function (name) {
		if (name !== "constructor") {
			Object.defineProperty(dest, name, Object.getOwnPropertyDescriptor(src, name));
		}
	});
}

var SuperPower = (function () {
	function SuperPower() {
		_classCallCheck(this, SuperPower);
	}

	_createClass(SuperPower, [{
		key: "laserEyes",
		value: function laserEyes() {
			console.log("I shoot deadly laser from my eyes!");
		}
	}, {
		key: "powerStrength",
		value: function powerStrength() {
			console.log("I can lift a building!");
		}
	}, {
		key: "lightningRun",
		value: function lightningRun() {
			console.log("I run faster than bullets!");
		}
	}]);

	return SuperPower;
})();

var Man = (function () {
	function Man() {
		_classCallCheck(this, Man);
	}

	_createClass(Man, [{
		key: "say",
		value: function say() {
			console.log("Hello...");
		}
	}]);

	return Man;
})();

var Cat = (function () {
	function Cat() {
		_classCallCheck(this, Cat);
	}

	_createClass(Cat, [{
		key: "say",
		value: function say() {
			console.log("Meow...");
		}
	}]);

	return Cat;
})();

mixin(SuperPower, Man);
mixin(SuperPower, Cat);
var superman = new Man();
var supercat = new Cat();

[superman, supercat].forEach(function (ele) {
	Object.getOwnPropertyNames(Object.getPrototypeOf(ele)).forEach(function (prop) {
		ele[prop]();
	});
});