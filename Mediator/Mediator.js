/**
	@abstract
	@interface
*/
export class Mediator{
	search(){
		throw new Error("Must implement Mediator.search()");
	}
	update(){
		throw new Error("Must implement Mediator.update()");
	}
	loadMore(){
		throw new Error("Must implement Mediator.loadMore()");
	}
}
