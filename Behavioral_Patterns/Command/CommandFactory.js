import * as cmd from "./Command";

export let CommandFactory = {
	createCopyCommand: function(){
		return new cmd.CopyCommand();
	},
	createPasteCommand: function(){
		return new cmd.PasteCommand();
	},
	createSelectCommand: function(){
		return new cmd.SelectCommand();
	}
};
