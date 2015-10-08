/**
	you can see this class as an abstract class or interface.
*/
export class RemoteControl{
	constructor(tv){ this._tv = tv; }
	on(){ this._tv.on(); }
	off(){ this._tv.off(); }
	setChannel(channel){ this._tv.setChannel(channel); }
}

export class SuperRemoteControl extends RemoteControl{
	constructor(tv){
		super(tv);
		this._currentChannel = 0;
	}

	setChannel(channel){
		super.setChannel(channel);
		this._currentChannel = channel;
	}

	nextChannel(){
		this.setChannel(this._currentChannel + 1);
	}

	previousChannel(){
		this.setChannel(this._currentChannel - 1);
	}
}
