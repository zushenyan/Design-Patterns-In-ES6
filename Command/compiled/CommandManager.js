"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CommandManager = (function () {
	function CommandManager() {
		_classCallCheck(this, CommandManager);

		this._history = [];
	}

	_createClass(CommandManager, [{
		key: "exec",
		value: function exec(command) {
			this._history.push(command);

			for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
				args[_key - 1] = arguments[_key];
			}

			command.execute.apply(command, args);
		}
	}, {
		key: "getHistory",
		value: function getHistory() {
			return this._history;
		}
	}]);

	return CommandManager;
})();

exports.CommandManager = CommandManager;