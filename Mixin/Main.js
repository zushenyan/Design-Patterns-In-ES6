/*
	If you think some features can be shared among particular objects, use Mixin.
*/

function mixin(src, dest){
	src = src.prototype;
	dest = dest.prototype;

	Object.getOwnPropertyNames(src).forEach((name) => {
		if(name !== "constructor"){
			Object.defineProperty(dest, name, Object.getOwnPropertyDescriptor(src, name));
		}
	});
}

class SuperPower{
	laserEyes(){
		console.log("I shoot deadly laser from my eyes!");
	}
	powerStrength(){
		console.log("I can lift a building!");
	}
	lightningRun(){
		console.log("I run faster than bullets!");
	}
}

class Man {
	say(){
		console.log("Hello...");
	}
}

class Cat {
	say(){
		console.log("Meow...");
	}
}

mixin(SuperPower, Man);
mixin(SuperPower, Cat);
let superman = new Man();
let supercat = new Cat();

[superman, supercat].forEach((ele) => {
	Object.getOwnPropertyNames(Object.getPrototypeOf(ele)).forEach((prop) => {
		ele[prop]();
	});
});
