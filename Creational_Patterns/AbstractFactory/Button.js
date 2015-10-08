export class Button{
	paint(){
		throw new Error("Must implement paintSelf()");
	}
}

export class OSXButton{
	paint(){
		console.log("OSX button is being painted.");
	}
}

export class WinButton{
	paint(){
		console.log("Win button is being painted.");
	}
}
