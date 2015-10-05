export class PubSub{
	constructor(){
		this._topics = {};
	}

	/**
		@param {string} topic - the topic channel you want to notify.
		@param {object} msg - the message you want to send in object format.
		@return {boolean} - return true if publish successfully else false.
	*/
	publish(topic, msg){
		if(!this._topics[topic]){
			return false;
		}
		let subscribers = this._topics[topic];
		for(let i = 0; i < subscribers.length; i++){
			subscribers[i].doSomething(msg);
		}
		return true;
	}

	/**
		@param {stirng} topic - the topic channel you are interested with.
		@param {function, object} doSomething - do something when you got notified.
		@return {symbol} - a unique token for every subscribers. Used for unsubscribing.
	*/
	subscribe(topic, doSomething){
		if(!this._topics[topic]){
			this._topics[topic] = [];
		}

		let token = Symbol();
		let subscriber = {
			token: token,
			doSomething: doSomething
		};

		this._topics[topic].push(subscriber);
		return token;
	}

	/**
		@param {string} topic - the topic channel you want to unsubscibe.
		@param {symbol} token - a unique token for unsubscribing. Should get one from subscribe function.
		@return {object, boolean} - will return removed object if successed or false if failed.
	*/
	unsubscribe(topic, token){
		if(!this._topics[topic]){ return false; }
		if(this._topics[topic].length === 0){ return false; }

		let subscribers = this._topics[topic];
		for(let i = 0; i < subscribers.length; i++){
			if(subscribers[i].token === token){
				return subscribers.splice(i, 1);
			}
		}
		return false;
	}

	hasTopic(topic){
		return this._topics[topic] ? true : false;
	}

	availableTopics(){
		return Object.keys(this._topics);
	}

	subscribers(){
		let result = [];
		for(let topic in this._topics){
			if(this._topics[topic]){
				let channel = {
					topic: topic,
					subscribers: this._topics[topic].length
				}
				result.push(channel);
			}
		}
		return result;
	}
}
