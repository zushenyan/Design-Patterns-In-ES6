/*
	Adapter replaces old interface with new one and this happens in scenario like new component doesn't match with the old interface,
	so need to write an adapter to integrate with current structure.
*/

class Login{
	login(user){
		console.log("user: " + user + " has logged in");
	}
}

class BetterLogin{
	login(user, credential){
		if(credential === "1234"){
			console.log("user: " + user + " has logged in");
		}
		else{
			console.log("login failed");
		}
	}
}

class LoginAdaper{
	constructor(credential){
		this._credential = credential;
	}

	login(user){
		new BetterLogin().login(user, this._credential);
	}
}

let login = new Login();
let loginAdapter = new LoginAdaper("1234");

login.login("iamacat");
loginAdapter.login("iamacat");
