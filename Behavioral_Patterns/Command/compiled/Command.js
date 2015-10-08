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

var Command = (function () {
	function Command() {
		_classCallCheck(this, Command);
	}

	_createClass(Command, [{
		key: "execute",
		value: function execute() {
			throw new Error("Must implement Command.execute()");
		}
	}]);

	return Command;
})();

exports.Command = Command;

var CopyCommand = (function (_Command) {
	_inherits(CopyCommand, _Command);

	function CopyCommand() {
		_classCallCheck(this, CopyCommand);

		_get(Object.getPrototypeOf(CopyCommand.prototype), "constructor", this).apply(this, arguments);
	}

	_createClass(CopyCommand, [{
		key: "execute",
		value: function execute(data) {
			console.log("copy " + data + ".");
		}
	}, {
		key: "toString",
		value: function toString() {
			return "copy";
		}
	}]);

	return CopyCommand;
})(Command);

exports.CopyCommand = CopyCommand;

var PasteCommand = (function (_Command2) {
	_inherits(PasteCommand, _Command2);

	function PasteCommand() {
		_classCallCheck(this, PasteCommand);

		_get(Object.getPrototypeOf(PasteCommand.prototype), "constructor", this).apply(this, arguments);
	}

	_createClass(PasteCommand, [{
		key: "execute",
		value: function execute(data) {
			console.log("paste " + data + ".");
		}
	}, {
		key: "toString",
		value: function toString() {
			return "paste";
		}
	}]);

	return PasteCommand;
})(Command);

exports.PasteCommand = PasteCommand;

var SelectCommand = (function (_Command3) {
	_inherits(SelectCommand, _Command3);

	function SelectCommand() {
		_classCallCheck(this, SelectCommand);

		_get(Object.getPrototypeOf(SelectCommand.prototype), "constructor", this).apply(this, arguments);
	}

	_createClass(SelectCommand, [{
		key: "execute",
		value: function execute(data) {
			console.log("select " + data + ".");
		}
	}, {
		key: "toString",
		value: function toString() {
			return "select";
		}
	}]);

	return SelectCommand;
})(Command);

exports.SelectCommand = SelectCommand;