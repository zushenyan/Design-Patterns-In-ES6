/*
	Abstract Factory in a nutshell:
	Client uses something concrete out from abstract to create something concrete out from abstract.
	Client doesn't care about if it's abstract or concrete.
*/
"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj["default"] = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _UIFactory = require("./UIFactory");

var factory = _interopRequireWildcard(_UIFactory);

var UI = (function () {
	function UI() {
		_classCallCheck(this, UI);

		this._uiFactory = null;
		this._button = null;
	}

	_createClass(UI, [{
		key: "switch",
		value: function _switch(uiFactory) {
			this._uiFactory = uiFactory;
			this._button = this._uiFactory.createButton();
		}
	}, {
		key: "paint",
		value: function paint() {
			if (this._button) {
				this._button.paint();
			}
		}
	}]);

	return UI;
})();

var osx = new factory.OSXFactory();
var win = new factory.WinFactory();
var ui = new UI();

ui["switch"](osx);
ui.paint();

ui["switch"](win);
ui.paint();