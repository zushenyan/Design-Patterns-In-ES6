/*
	Factory pattern hides the complex logic of object creation from client.
*/

function CharacterFactory(type){

	switch(type){
		case "monster":
			return {name: "slime", hp: 100};
		case "player":
			return {name: "hero", hp: 1000};
		case "npc":
		default:
			return {name: "village", hp: 10};
	}
}

let monster = CharacterFactory("monster");
let player = CharacterFactory("player");
let npc = CharacterFactory("npc");
let whatever = CharacterFactory("cat");

console.log(monster);
console.log(player);
console.log(npc);
console.log(whatever);
