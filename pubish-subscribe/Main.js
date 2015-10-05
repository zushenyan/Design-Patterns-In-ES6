import { PubSub } from "./PubSub";

class Subscriber{
	constructor(name){
		this._name = name;
	}

	update(data){
		console.log(this._name + " receives: " + data);
	}
}

let p1 = new Subscriber("Person 1");
let p2 = new Subscriber("Person 2");
let p3 = new Subscriber("Person 3");
let p4 = new Subscriber("Person 4");

let pubsub = new PubSub();
pubsub.subscribe("pets", p1.update.bind(p1));
pubsub.subscribe("pets", p2.update.bind(p2));
pubsub.subscribe("cooking", p3.update.bind(p3));
pubsub.subscribe("games", p4.update.bind(p4));

pubsub.subscribe("games", p1.update.bind(p1));
pubsub.subscribe("cooking", p2.update.bind(p2));

pubsub.publish("pets", "Come and grab a cat today!");
pubsub.publish("cooking", "Make an hamburger in 10 seconds!");
pubsub.publish("games", "Spacecraft out?");
