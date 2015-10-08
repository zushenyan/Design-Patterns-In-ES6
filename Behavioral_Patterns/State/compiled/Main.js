/*
	State pattern free us from large/complex if-else conditional statement,
	especially being used greatly in game programs - finite state machine -
	as a backbone of game AI.
*/
"use strict";

var _TrafficLight = require("./TrafficLight");

console.log("Infinite state loop, press ctrl+c to exit.");
new _TrafficLight.TrafficLight().start();