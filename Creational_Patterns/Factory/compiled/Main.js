/*
	Factory pattern hides the complex logic of object creation from client.
*/

"use strict";

function CharacterFactory(type) {

	switch (type) {
		case "monster":
			return { name: "slime", hp: 100 };
		case "player":
			return { name: "hero", hp: 1000 };
		case "npc":
		default:
			return { name: "village", hp: 10 };
	}
}

var monster = CharacterFactory("monster");
var player = CharacterFactory("player");
var npc = CharacterFactory("npc");
var whatever = CharacterFactory("cat");

console.log(monster);
console.log(player);
console.log(npc);
console.log(whatever);