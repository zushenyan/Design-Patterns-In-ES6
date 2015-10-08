export class State{
	constructor(context){
		if(this.contructor === "State"){
			throw new Error("State is an abstract class!");
		}
		this._context = context;
	}
	doAction(){ throw new Error("Must implement doAction()"); }
}

export class RedLightState extends State{
	doAction(){
		console.log("Red light on... wait for 3 seconds.");
		setTimeout(() => {
			this._context.setState(new YellowLightState(this._context));
		}, 3000);
	}
}

export class YellowLightState extends State{
	doAction(){
		console.log("Yellow light now... wait for 1 second.");
		setTimeout(() => {
			this._context.setState(new GreenLightState(this._context));
		}, 1000);
	}
}

export class GreenLightState extends State{
	doAction(){
		console.log("Green light! It will last for 3 seconds.");
		setTimeout(() => {
			this._context.setState(new RedLightState(this._context));
		}, 3000);
	}
}
