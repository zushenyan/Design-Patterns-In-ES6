/**
	@interface - this can be an interface
	@class - or an class
*/
export class Observer{
	update(){
		throw new Error("Must implement Observer.update()");
	}
}
