"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var State = (function () {
	function State(context) {
		_classCallCheck(this, State);

		if (this.contructor === "State") {
			throw new Error("State is an abstract class!");
		}
		this._context = context;
	}

	_createClass(State, [{
		key: "doAction",
		value: function doAction() {
			throw new Error("Must implement doAction()");
		}
	}]);

	return State;
})();

exports.State = State;

var RedLightState = (function (_State) {
	_inherits(RedLightState, _State);

	function RedLightState() {
		_classCallCheck(this, RedLightState);

		_get(Object.getPrototypeOf(RedLightState.prototype), "constructor", this).apply(this, arguments);
	}

	_createClass(RedLightState, [{
		key: "doAction",
		value: function doAction() {
			var _this = this;

			console.log("Red light on... wait for 3 seconds.");
			setTimeout(function () {
				_this._context.setState(new YellowLightState(_this._context));
			}, 3000);
		}
	}]);

	return RedLightState;
})(State);

exports.RedLightState = RedLightState;

var YellowLightState = (function (_State2) {
	_inherits(YellowLightState, _State2);

	function YellowLightState() {
		_classCallCheck(this, YellowLightState);

		_get(Object.getPrototypeOf(YellowLightState.prototype), "constructor", this).apply(this, arguments);
	}

	_createClass(YellowLightState, [{
		key: "doAction",
		value: function doAction() {
			var _this2 = this;

			console.log("Yellow light now... wait for 1 second.");
			setTimeout(function () {
				_this2._context.setState(new GreenLightState(_this2._context));
			}, 1000);
		}
	}]);

	return YellowLightState;
})(State);

exports.YellowLightState = YellowLightState;

var GreenLightState = (function (_State3) {
	_inherits(GreenLightState, _State3);

	function GreenLightState() {
		_classCallCheck(this, GreenLightState);

		_get(Object.getPrototypeOf(GreenLightState.prototype), "constructor", this).apply(this, arguments);
	}

	_createClass(GreenLightState, [{
		key: "doAction",
		value: function doAction() {
			var _this3 = this;

			console.log("Green light! It will last for 3 seconds.");
			setTimeout(function () {
				_this3._context.setState(new RedLightState(_this3._context));
			}, 3000);
		}
	}]);

	return GreenLightState;
})(State);

exports.GreenLightState = GreenLightState;