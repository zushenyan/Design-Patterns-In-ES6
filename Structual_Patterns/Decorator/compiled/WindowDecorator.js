/**
	@abstract
	@interface
*/
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Window = (function () {
	function Window() {
		_classCallCheck(this, Window);
	}

	_createClass(Window, [{
		key: "drawSelf",
		value: function drawSelf() {
			throw new Error("Must implement drawSelf()");
		}
	}, {
		key: "toString",
		value: function toString() {
			throw new Error("Must implement toString()");
		}
	}]);

	return Window;
})();

exports.Window = Window;

var WindowDecorator = (function (_Window) {
	_inherits(WindowDecorator, _Window);

	function WindowDecorator(decorator) {
		_classCallCheck(this, WindowDecorator);

		_get(Object.getPrototypeOf(WindowDecorator.prototype), "constructor", this).call(this);
		this._windowDecorator = decorator;
	}

	_createClass(WindowDecorator, [{
		key: "drawSelf",
		value: function drawSelf() {
			this._windowDecorator.drawSelf();
		}
	}, {
		key: "toString",
		value: function toString() {
			return this._windowDecorator.toString();
		}
	}]);

	return WindowDecorator;
})(Window);

exports.WindowDecorator = WindowDecorator;

var SimpleWindow = (function (_Window2) {
	_inherits(SimpleWindow, _Window2);

	function SimpleWindow() {
		_classCallCheck(this, SimpleWindow);

		_get(Object.getPrototypeOf(SimpleWindow.prototype), "constructor", this).apply(this, arguments);
	}

	_createClass(SimpleWindow, [{
		key: "drawSelf",
		value: function drawSelf() {
			console.log("draw some simple things");
		}
	}, {
		key: "toString",
		value: function toString() {
			return "Simple Window";
		}
	}]);

	return SimpleWindow;
})(Window);

exports.SimpleWindow = SimpleWindow;

var VerticalScrollbarWindowDecorator = (function (_WindowDecorator) {
	_inherits(VerticalScrollbarWindowDecorator, _WindowDecorator);

	function VerticalScrollbarWindowDecorator() {
		_classCallCheck(this, VerticalScrollbarWindowDecorator);

		_get(Object.getPrototypeOf(VerticalScrollbarWindowDecorator.prototype), "constructor", this).apply(this, arguments);
	}

	_createClass(VerticalScrollbarWindowDecorator, [{
		key: "drawSelf",
		value: function drawSelf() {
			_get(Object.getPrototypeOf(VerticalScrollbarWindowDecorator.prototype), "drawSelf", this).call(this);
			console.log("draw vertical scrollbar");
		}
	}, {
		key: "toString",
		value: function toString() {
			return "Vertical Scrollbar " + this._windowDecorator.toString();
		}
	}]);

	return VerticalScrollbarWindowDecorator;
})(WindowDecorator);

exports.VerticalScrollbarWindowDecorator = VerticalScrollbarWindowDecorator;

var HorizontalScrollbarWindowDecorator = (function (_WindowDecorator2) {
	_inherits(HorizontalScrollbarWindowDecorator, _WindowDecorator2);

	function HorizontalScrollbarWindowDecorator() {
		_classCallCheck(this, HorizontalScrollbarWindowDecorator);

		_get(Object.getPrototypeOf(HorizontalScrollbarWindowDecorator.prototype), "constructor", this).apply(this, arguments);
	}

	_createClass(HorizontalScrollbarWindowDecorator, [{
		key: "drawSelf",
		value: function drawSelf() {
			_get(Object.getPrototypeOf(HorizontalScrollbarWindowDecorator.prototype), "drawSelf", this).call(this);
			console.log("draw horizontal scrollbar");
		}
	}, {
		key: "toString",
		value: function toString() {
			return "Horizontal Scrollbar " + this._windowDecorator.toString();
		}
	}]);

	return HorizontalScrollbarWindowDecorator;
})(WindowDecorator);

exports.HorizontalScrollbarWindowDecorator = HorizontalScrollbarWindowDecorator;