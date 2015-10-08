/*
	If you try to reduce memory usage by centralizing data to a place, it's technically a Flyweight pattern.
	The main spirit of this pattern is resource sharing. Making duplicated datas to minimal as possible.
*/

class Image{
	constructor(content){
		this._content = content;
	}

	getContent(){
		return this._content;
	}
}

class ImageFile{
	constructor(fileName, image){
		this._fileName = fileName;
		this._image = image;
	}

	info(){
		console.log("File Name: " + this._fileName + ", Content: " + this._image.getContent());
	}
}

class ImageFileFactory{
	constructor(){
		this._cached = {};
		this._imageCreated = 0;
	}

	// you can have diffrent files, but image should be the same.
	createImageFile(fileName, content){
		let image = this._cached[content];
		if(!image){
			image = new Image(content);
			this._cached[content] = image;
			this._imageCreated++;
		}
		return new ImageFile(fileName, image);
	}

	getImageCreated(){
		return this._imageCreated;
	}
}

let factory = new ImageFileFactory();

factory.createImageFile("cat_standing", "A cat standing on the floor");
factory.createImageFile("cat_stands", "A cat standing on the floor");
factory.createImageFile("cat_stand", "A cat standing on the floor");
factory.createImageFile("dog_sit", "A dog sits here");
factory.createImageFile("dog_sitting", "A dog sits here");
factory.createImageFile("man", "A man is running");
factory.createImageFile("man_running", "A man is running");

console.log(factory.getImageCreated());
