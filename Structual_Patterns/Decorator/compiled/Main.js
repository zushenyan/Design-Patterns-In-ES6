/**
	For those who are confused:
	Decorator pattern uses base decorator class as *recursion delegator*.
	In this example, WindowDecorator is our delegator.
	Whenever our child decorator calls drawSelf(), interpreter looks into _windowDecorator and calls _windowDecorator's drawSelf().
	It repeats in this fashion utill it hits SimpleWindow. At this time, no more recursion furthre, and it goes back to our starting point.
*/
"use strict";

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj["default"] = obj; return newObj; } }

var _WindowDecorator = require("./WindowDecorator");

var decorator = _interopRequireWildcard(_WindowDecorator);

var awesomeWindow = new decorator.HorizontalScrollbarWindowDecorator(new decorator.VerticalScrollbarWindowDecorator(new decorator.SimpleWindow()));

awesomeWindow.drawSelf();

console.log(awesomeWindow.toString());