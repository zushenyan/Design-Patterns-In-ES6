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
		return this
	}

	setMemory(memory){
		this._laptop["Memory"] = memory;
		return this
	}

	setCaseStyle(caseStyle){
		this._laptop["CaseStyle"] = caseStyle;
		return this
	}

	getResult(){
		return this._laptop;
	}
}

let builder = new LaptopBuilder().setScreenSize("14 inch")
                                 .setMemory("4 GB")
                                 .setCaseStyle("Rainbow Case")
                                 .getResult();
console.log(builder);
