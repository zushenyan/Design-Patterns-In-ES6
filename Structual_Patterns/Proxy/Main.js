/*
	A proxy can be an interface to anything, most of its job can be varied,
	from adding security to network connection, simplifing complex interface,
	to caching files that just loaded.
*/

/**
	@abstract
*/
class Image{
	constructor(fileName){
		if(this.constructor === "Image"){
			throw new Error("Image is an abstract class, shouldn't be instanitated.");
		}
		this._fileName = fileName;
	}

	displayImage(){
		console.log("displaying " + this._fileName);
	}
}

class RealImage extends Image{
	constructor(fileName){
		super(fileName);
		this.loadImageFromDisk();
	}

	loadImageFromDisk(){
		console.log("loading " + this._fileName + " from disk...");
	}
}

class ProxyImage extends Image{
	constructor(fileName){
		super(fileName);
		this._image = null;
	}

	displayImage(){
		if(!this._image){
			this._image = new RealImage(this._fileName);
		}
		this._image.displayImage();
	}
}

let proxyImage = new ProxyImage("proxy_10mb_img.jpg");
let image = new RealImage("10mb_img.jpg");

proxyImage.displayImage();
proxyImage.displayImage();
image.displayImage();
proxyImage.displayImage();
