/**
	@interface
	@abstract
*/
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TV = (function () {
	function TV() {
		_classCallCheck(this, TV);
	}

	_createClass(TV, [{
		key: "on",
		value: function on() {
			throw new Error("Must implment on()");
		}
	}, {
		key: "off",
		value: function off() {
			throw new Error("Must implment off()");
		}
	}, {
		key: "setChannel",
		value: function setChannel() {
			throw new Error("Must implment setChannel()");
		}
	}]);

	return TV;
})();

exports.TV = TV;

var SamsungTV = (function (_TV) {
	_inherits(SamsungTV, _TV);

	function SamsungTV() {
		_classCallCheck(this, SamsungTV);

		_get(Object.getPrototypeOf(SamsungTV.prototype), "constructor", this).apply(this, arguments);
	}

	_createClass(SamsungTV, [{
		key: "on",
		value: function on() {
			console.log("Samsung TV on");
		}
	}, {
		key: "off",
		value: function off() {
			console.log("Samsung TV off");
		}
	}, {
		key: "setChannel",
		value: function setChannel(channel) {
			console.log("Samsung TV set chennal to " + channel);
		}
	}]);

	return SamsungTV;
})(TV);

exports.SamsungTV = SamsungTV;

var SonyTV = (function (_TV2) {
	_inherits(SonyTV, _TV2);

	function SonyTV() {
		_classCallCheck(this, SonyTV);

		_get(Object.getPrototypeOf(SonyTV.prototype), "constructor", this).apply(this, arguments);
	}

	_createClass(SonyTV, [{
		key: "on",
		value: function on() {
			console.log("Sony TV on");
		}
	}, {
		key: "off",
		value: function off() {
			console.log("Sony TV off");
		}
	}, {
		key: "setChannel",
		value: function setChannel(channel) {
			console.log("Sony TV set chennal to " + channel);
		}
	}]);

	return SonyTV;
})(TV);

exports.SonyTV = SonyTV;