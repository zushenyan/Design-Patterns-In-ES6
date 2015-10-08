import { Controller } from "./Controller";

class SearchButton {
	constructor(mediator){
		this._mediator = mediator;
	}

	disableButton(){
		console.log("SearchButton is disabled.");
	}

	click(){
		this._mediator.search();
	}
}

class UploadButton {
	constructor(mediator){
		this._mediator = mediator;
	}

	disableButton(){
		console.log("UploadButton is disabled.");
	}

	click(){
		this._mediator.upload();
	}
}

class LoadMoreButton {
	constructor(mediator){
		this._mediator = mediator;
	}

	disableButton(){
		console.log("LoadMoreButton is disabled.");
	}

	click(){
		this._mediator.loadMore();
	}
}

let controller = new Controller();
let searchButton = new SearchButton(controller);
let uploadButton = new UploadButton(controller);
let loadMoreButton = new LoadMoreButton(controller);

controller.registerSearchButton(searchButton);
controller.registerUploadButton(uploadButton);
controller.registerLoadMoreButton(loadMoreButton);

searchButton.click();
uploadButton.click();
loadMoreButton.click();
