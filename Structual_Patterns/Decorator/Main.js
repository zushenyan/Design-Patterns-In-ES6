/**
	For those who are confused:
	Decorator pattern uses base decorator class as *recursion delegator*.
	In this example, WindowDecorator is our delegator.
	Whenever our child decorator calls drawSelf(), interpreter looks into _windowDecorator and calls _windowDecorator's drawSelf().
	It repeats in this fashion utill it hits SimpleWindow. At this time, no more recursion furthre, and it goes back to our starting point.
*/
import * as decorator from "./WindowDecorator";

let awesomeWindow =
	new decorator.HorizontalScrollbarWindowDecorator(
	new decorator.VerticalScrollbarWindowDecorator(
	new decorator.SimpleWindow()));

awesomeWindow.drawSelf();

console.log(awesomeWindow.toString());
