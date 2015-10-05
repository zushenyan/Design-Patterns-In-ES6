import { Mediator } from "./Mediator";

export class Controller extends Mediator{
	constructor(){
		super();
		this._searchButton = null;
		this._uploadButton = null;
		this._loadMoreButton = null;
	}

	registerSearchButton(button){ this._searchButton = button; }
	registerUploadButton(button){ this._uploadButton = button; }
	registerLoadMoreButton(button){ this._loadMoreButton = button; }

	search(){
		this._searchButton.disableButton();
		console.log("search complete!");
	}
	upload(){
		this._uploadButton.disableButton();
		console.log("upload complete!");
	}
	loadMore(){
		this._loadMoreButton.disableButton();
		console.log("load more complete!");
	}
}
