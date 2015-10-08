import {RedLightState} from "./State";

export class TrafficLight{
	constructor(){
		this._state = new RedLightState(this);
	}

	setState(state){
		this._state = state;
		this._state.doAction();
	}

	start(){
		this._state.doAction();
	}
}
