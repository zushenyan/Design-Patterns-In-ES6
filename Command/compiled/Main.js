"use strict";

var _CommandFactory = require("./CommandFactory");

var _CommandManager = require("./CommandManager");

var cf = _CommandFactory.CommandFactory;
var cm = new _CommandManager.CommandManager();

cm.exec(cf.createCopyCommand(), "cat");
cm.exec(cf.createPasteCommand(), "seaweed on a cat");
cm.exec(cf.createSelectCommand(), "a cat");

console.log(cm.getHistory().toString());