/**
	@interface
	@abstract
*/
export class TV {
	on(){ throw new Error("Must implment on()"); }
	off(){ throw new Error("Must implment off()"); }
	setChannel(){ throw new Error("Must implment setChannel()"); }
}

export class SamsungTV extends TV{
	on(){
		console.log("Samsung TV on");
	}

	off(){
		console.log("Samsung TV off");
	}

	setChannel(channel){
		console.log("Samsung TV set chennal to " + channel);
	}
}

export class SonyTV extends TV{
	on(){
		console.log("Sony TV on");
	}

	off(){
		console.log("Sony TV off");
	}

	setChannel(channel){
		console.log("Sony TV set chennal to " + channel);
	}
}
