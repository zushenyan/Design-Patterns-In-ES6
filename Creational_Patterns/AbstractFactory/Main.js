/*
	Abstract Factory in a nutshell:
	Client uses something concrete out from abstract to create something concrete out from abstract.
	Client doesn't care about if it's abstract or concrete.
*/
import * as factory from "./UIFactory";

class UI{
	constructor(){
		this._uiFactory = null;
		this._button = null;
	}

	switch(uiFactory){
		this._uiFactory = uiFactory;
		this._button = this._uiFactory.createButton();
	}

	paint(){
		if(this._button){
			this._button.paint();
		}
	}
}

let osx = new factory.OSXFactory();
let win = new factory.WinFactory();
let ui = new UI();

ui.switch(osx);
ui.paint();

ui.switch(win);
ui.paint();
