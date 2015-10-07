/*
	If you have ever write gulp, you must be familiar with this:
	gulp(src("test.js"))
	.pipe(rename("meow.js"))
	.pipe(gulp.dest("./"));
*/

class Profile {
	constructor(name, age, height){
		this._name = name;
		this._age = age;
		this._height = height;
	}

	printProfile(){
		console.log(
			"name: " + this._name.toString() + "\n" +
			"age: " + this._age.toString() + "\n" +
			"height: " + this._height.toString()
		);
	}
}

class ProfileEditor{
	constructor(){
		this._profile = null;
	}

	targetProfile(profile){
		this._profile = profile;
		return this;
	}

	edit(task, ...args){
		task.call(this, ...args);
		return this;
	}
}

function rename(newName){ this._profile._name = newName; }
function addAge(){ this._profile._age += 1 };
function changeHeight(newHeight){ this._profile._height = newHeight };

let profile = new Profile("mark", 20, 6.1);
let pe = new ProfileEditor();
pe.targetProfile(profile)
.edit(rename, "John")
.edit(addAge)
.edit(changeHeight, 6.5);

profile.printProfile();
