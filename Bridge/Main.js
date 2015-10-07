/*
	Bridge pattern is also called Double Adapters Pattern,
	which makes client to use a service through two levels of abstraction
	that will lead to more loose relation between components.
*/
import { SonyTV, SamsungTV } from "./TV";
import { RemoteControl, SuperRemoteControl } from "./Remote";

let samsungTV = new SamsungTV();
let	sonyTV = new SonyTV();
let	rc1 = new RemoteControl(samsungTV);
let	rc2 = new RemoteControl(sonyTV);
let	src1 = new SuperRemoteControl(samsungTV);
let	src2 = new SuperRemoteControl(sonyTV);

console.log("remote control 1");
rc1.on();
rc1.off();
rc1.setChannel(50);

console.log("remote control 2");
rc2.on();
rc2.off();
rc2.setChannel(50);

console.log("super remote control 1");
src1.on();
src1.off();
src1.setChannel(50);
src1.nextChannel();
src1.previousChannel();

console.log("super remote control 2");
src2.on();
src2.off();
src2.setChannel(50);
src2.nextChannel();
src2.previousChannel();
