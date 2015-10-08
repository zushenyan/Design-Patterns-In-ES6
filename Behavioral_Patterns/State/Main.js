/*
	State pattern frees us from large/complex if-else conditional statement,
	especially being used greatly in game programs - finite state machine -
	as a backbone of game AI.
*/
import { TrafficLight } from "./TrafficLight";

console.log("Infinite state loop, press ctrl+c to exit.");
new TrafficLight().start();
