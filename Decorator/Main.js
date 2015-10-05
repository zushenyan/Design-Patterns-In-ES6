import * as decorator from "./WindowDecorator";

let awesomeWindow =
	new decorator.HorizontalScrollbarWindowDecorator(
	new decorator.VerticalScrollbarWindowDecorator(
	new decorator.SimpleWindow()));

awesomeWindow.drawSelf();

console.log(awesomeWindow.toString());
