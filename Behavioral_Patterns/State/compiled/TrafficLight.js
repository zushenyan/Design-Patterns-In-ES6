"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _State = require("./State");

var TrafficLight = (function () {
	function TrafficLight() {
		_classCallCheck(this, TrafficLight);

		this._state = new _State.RedLightState(this);
	}

	_createClass(TrafficLight, [{
		key: "setState",
		value: function setState(state) {
			this._state = state;
			this._state.doAction();
		}
	}, {
		key: "start",
		value: function start() {
			this._state.doAction();
		}
	}]);

	return TrafficLight;
})();

exports.TrafficLight = TrafficLight;