/**
	@interface
	@abstract
*/
export class Command {
	execute(){
		throw new Error("Must implement Command.execute()");
	}
}

export class CopyCommand extends Command{
	execute(data){ console.log("copy " + data + "."); }
	toString(){ return "copy"; }
}

export class PasteCommand extends Command{
	execute(data){ console.log("paste " + data + "."); }
	toString(){ return "paste"; }
}

export class SelectCommand extends Command{
	execute(data){ console.log("select " + data + "."); }
	toString(){ return "select"; }
}
