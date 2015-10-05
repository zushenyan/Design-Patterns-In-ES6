"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Button = (function () {
	function Button() {
		_classCallCheck(this, Button);
	}

	_createClass(Button, [{
		key: "paint",
		value: function paint() {
			throw new Error("Must implement paintSelf()");
		}
	}]);

	return Button;
})();

exports.Button = Button;

var OSXButton = (function () {
	function OSXButton() {
		_classCallCheck(this, OSXButton);
	}

	_createClass(OSXButton, [{
		key: "paint",
		value: function paint() {
			console.log("OSX button is being painted.");
		}
	}]);

	return OSXButton;
})();

exports.OSXButton = OSXButton;

var WinButton = (function () {
	function WinButton() {
		_classCallCheck(this, WinButton);
	}

	_createClass(WinButton, [{
		key: "paint",
		value: function paint() {
			console.log("Win button is being painted.");
		}
	}]);

	return WinButton;
})();

exports.WinButton = WinButton;