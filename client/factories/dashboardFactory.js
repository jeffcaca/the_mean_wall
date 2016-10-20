app.factory('dashboardFactory', ["$http", "$location", function($http, $location){
	var factory={}

	factory.checkUser = function(callback){
		$http.get('/checkUser').then(function(data){

			
			callback(data.data)
		})
	}
	factory.newMessage = function(newmessage, callback){
		console.log(newmessage)
		$http.post('/newmessage', newmessage).then(function(returnedMessage){
	
			callback(returnedMessage.data)

		})
	}
	factory.newComment = function(newcomment, callback){
		console.log(newcomment)
		$http.post('/newcomment/' +newcomment.msgid, newcomment).then(function(returnedComment){
			callback(returnedComment.data)
		})
	}
	factory.getMessages = function(callback){
		$http.get('/getmessages').then(function(returnedMessages){
			
			callback(returnedMessages.data)
		})
	}

	return factory;
}])