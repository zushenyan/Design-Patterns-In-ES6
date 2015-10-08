/*
	Iterator design pattern provides a universal way to traverse a collection of objects,
	which means, as a client, by using interface provided by iterator, you can operate
	a collection of objects without knowing much about a collection.

	In JavaScript, there is a forEach as default iterating method.
*/

class Iterator{
	constructor(collection){
		this._index = 0;
		this._collection = collection;
	}

	next(){
		return this.hasNext() ? this._collection[this._index++] : null;
	}

	hasNext(){
		return this._index < this._collection.length;
	}

	reset(){
		this._index = 0;
	}
}

let arr = ["meow", 123, "ggyy", 3.14];
let iterator = new Iterator(arr);

while(iterator.hasNext()){
	console.log(iterator.next());
}
