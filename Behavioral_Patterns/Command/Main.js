import {CommandFactory} from "./CommandFactory";
import {CommandManager} from "./CommandManager";

let cf = CommandFactory;
let cm = new CommandManager();

cm.exec(cf.createCopyCommand(), "cat");
cm.exec(cf.createPasteCommand(), "seaweed on a cat");
cm.exec(cf.createSelectCommand(), "a cat");

console.log(cm.getHistory().toString());
