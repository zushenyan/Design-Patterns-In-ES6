/*
	Bridge pattern is also called Double Adapters Pattern,
	which makes client to use a service through two levels of abstraction
	that will lead to more loose relation between components.
*/
"use strict";

var _TV = require("./TV");

var _Remote = require("./Remote");

var samsungTV = new _TV.SamsungTV();
var sonyTV = new _TV.SonyTV();
var rc1 = new _Remote.RemoteControl(samsungTV);
var rc2 = new _Remote.RemoteControl(sonyTV);
var src1 = new _Remote.SuperRemoteControl(samsungTV);
var src2 = new _Remote.SuperRemoteControl(sonyTV);

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