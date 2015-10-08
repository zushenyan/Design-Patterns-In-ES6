"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj["default"] = obj; return newObj; } }

var _Command = require("./Command");

var cmd = _interopRequireWildcard(_Command);

var CommandFactory = {
	createCopyCommand: function createCopyCommand() {
		return new cmd.CopyCommand();
	},
	createPasteCommand: function createPasteCommand() {
		return new cmd.PasteCommand();
	},
	createSelectCommand: function createSelectCommand() {
		return new cmd.SelectCommand();
	}
};
exports.CommandFactory = CommandFactory;