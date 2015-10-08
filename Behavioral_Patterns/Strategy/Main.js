/*
	Strategy pattern:
	* defines a group of algorithm
	* encapsulates each algorithm
	* and makes algorithm interchangeable with each other.
	You are now able to select algorithm which depends on what scenario you are in.

	JavaScript provides more flexibility than class based language,
	which means you can easily swap out one funciton as strategy to another.
*/

class ShoppingCart {
	constructor(){
		this._shoppingList = [];
	}

	add(item){
		this._shoppingList.push(item);
	}

	remove(item){
		let index = this._shoppingList.indexOf(item);
		let result = index ? this._shoppingList.splice(index, 1) : null;
		return result;
	}

	bill(strategy){
		let sum = 0;
		this._shoppingList.forEach((ele) => {
			sum += ele.price;
		});
		return strategy(sum);
	}
}

function normalHour(rawPrice){
	return rawPrice;
}

function happyHour(rawPrice){
	return rawPrice * 0.5;
}

let cart = new ShoppingCart();

cart.add({name: "food", price: 3.5});
cart.add({name: "clock", price: 4.7});
cart.add({name: "brush", price: 1.5});
cart.add({name: "backpack", price: 17.25});

console.log(cart.bill(normalHour));
console.log(cart.bill(happyHour));
