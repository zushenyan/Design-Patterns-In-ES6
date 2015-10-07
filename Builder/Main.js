/*
	Builder pattern unlike Factory pattern which wants to create things via polymorphism,
	it solves telescoping constructor problem via a builder through step-by-step set up.
*/

/*
	our Laptop needs to have
	* screen size
	* memory
	* case
	for options.
*/

class LaptopBuilder {
	constructor(){
		this._laptop = {};
	}

	setScreenSize(screenSize){
		this._laptop["ScreenSize"] = screenSize;
	}

	setMemory(memory){
		this._laptop["Memory"] = memory;
	}

	setCaseStyle(caseStyle){
		this._laptop["CaseStyle"] = caseStyle;
	}

	getResult(){
		return this._laptop;
	}
}

let builder = new LaptopBuilder();
builder.setScreenSize("14 inch");
builder.setMemory("4 GB");
builder.setCaseStyle("Rainbow Case");
console.log(builder.getResult());
