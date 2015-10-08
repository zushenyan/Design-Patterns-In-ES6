/*
	Define an algorithm and implement part of it, leaving some abstract part to its subclasses to implement.
*/

/**
	@abstract
*/
class Process{
	start(){
		console.log("Process starts running...");
		this.doSomethingA();
		console.log("Process does something else.");
		this.doSomethingB();
		console.log("Process done.");
	}

	doSomethingA(){ throw new Error("Must implement doSomethingA()"); }
	doSomethingB(){ throw new Error("Must implement doSomethingB()"); }
}

class ConcreteProcess extends Process{
	doSomethingA(){
		console.log("Concrete Process is handling doSomethingA()");
	}

	doSomethingB(){
		console.log("Concrete Process is handling doSomethingB()");
	}
}

new ConcreteProcess().start();
