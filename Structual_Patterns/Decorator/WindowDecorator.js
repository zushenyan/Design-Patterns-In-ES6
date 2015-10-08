/**
	@abstract
	@interface
*/
export class Window{
	drawSelf(){ throw new Error("Must implement drawSelf()"); }
	toString(){ throw new Error("Must implement toString()"); }
}

export class WindowDecorator extends Window{
	constructor(decorator){
		super();
		this._windowDecorator = decorator;
	}

	drawSelf(){
		this._windowDecorator.drawSelf();
	}

	toString(){
		return this._windowDecorator.toString();
	}
}

export class SimpleWindow extends Window{
	drawSelf(){
		console.log("draw some simple things");
	}

	toString(){
		return "Simple Window";
	}
}

export class VerticalScrollbarWindowDecorator extends WindowDecorator{
	drawSelf(){
		super.drawSelf();
		console.log("draw vertical scrollbar");
	}

	toString(){
		return "Vertical Scrollbar " + this._windowDecorator.toString();
	}
}

export class HorizontalScrollbarWindowDecorator extends WindowDecorator{
	drawSelf(){
		super.drawSelf();
		console.log("draw horizontal scrollbar");
	}

	toString(){
		return "Horizontal Scrollbar " + this._windowDecorator.toString();
	}
}
