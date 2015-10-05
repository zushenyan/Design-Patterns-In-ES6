import * as button from "./Button";

export class UIFactory{
	createButton(){
		throw new Error("Must implement createButton()");
	}
}

export class OSXFactory extends UIFactory{
	createButton(){
		return new button.OSXButton();
	}
}

export class WinFactory extends UIFactory{
	createButton(){
		return new button.WinButton();
	}
}
