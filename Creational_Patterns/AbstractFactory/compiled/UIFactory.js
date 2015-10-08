"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj["default"] = obj; return newObj; } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _Button = require("./Button");

var button = _interopRequireWildcard(_Button);

var UIFactory = (function () {
	function UIFactory() {
		_classCallCheck(this, UIFactory);
	}

	_createClass(UIFactory, [{
		key: "createButton",
		value: function createButton() {
			throw new Error("Must implement createButton()");
		}
	}]);

	return UIFactory;
})();

exports.UIFactory = UIFactory;

var OSXFactory = (function (_UIFactory) {
	_inherits(OSXFactory, _UIFactory);

	function OSXFactory() {
		_classCallCheck(this, OSXFactory);

		_get(Object.getPrototypeOf(OSXFactory.prototype), "constructor", this).apply(this, arguments);
	}

	_createClass(OSXFactory, [{
		key: "createButton",
		value: function createButton() {
			return new button.OSXButton();
		}
	}]);

	return OSXFactory;
})(UIFactory);

exports.OSXFactory = OSXFactory;

var WinFactory = (function (_UIFactory2) {
	_inherits(WinFactory, _UIFactory2);

	function WinFactory() {
		_classCallCheck(this, WinFactory);

		_get(Object.getPrototypeOf(WinFactory.prototype), "constructor", this).apply(this, arguments);
	}

	_createClass(WinFactory, [{
		key: "createButton",
		value: function createButton() {
			return new button.WinButton();
		}
	}]);

	return WinFactory;
})(UIFactory);

exports.WinFactory = WinFactory;