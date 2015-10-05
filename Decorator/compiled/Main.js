"use strict";

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj["default"] = obj; return newObj; } }

var _WindowDecorator = require("./WindowDecorator");

var decorator = _interopRequireWildcard(_WindowDecorator);

var awesomeWindow = new decorator.HorizontalScrollbarWindowDecorator(new decorator.VerticalScrollbarWindowDecorator(new decorator.SimpleWindow()));

awesomeWindow.drawSelf();

console.log(awesomeWindow.toString());