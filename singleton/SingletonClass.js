let _instance_ = null; // _instance_ will not be exposed to outside.

class SingletonClass {
	constructor(name){
		if(!_instance_){
			this._name = name;
			_instance_ = this;
		}

		return _instance_;
	}

	getName(){
		return this._name;
	}
}

export { SingletonClass };
