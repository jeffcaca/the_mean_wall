



app.controller('dashboardController', ['$scope', 'dashboardFactory', "$location", function($scope, dashboardFactory, $location){
		$scope.newComment = {}
		$scope.newMess={}

	$scope.newMessage = function(){
		$scope.newMess.userid = $scope.currentUser._id
		$scope.newMess.name = $scope.currentUser.name
		dashboardFactory.newMessage($scope.newMess, function(returnedData){
			console.log(returnedData)
			$location.url('/dashboard/')
		})
		}
	
	$scope.comment = function(messageId){
		console.log($scope.newComment)
		$scope.newComment.userid = $scope.currentUser._id
		$scope.newComment.name = $scope.currentUser.name
		$scope.newComment.msgid = messageId
		dashboardFactory.newComment($scope.newComment, function(returnedData){
			$location.url('/dashboard/')
		})

	}

	dashboardFactory.checkUser(function(data){
		$scope.currentUser = data.user;
		if(!$scope.currentUser){
			$location.url('/')
		}
	})

	dashboardFactory.getMessages(function(returnedMessages){

		$scope.messages = returnedMessages;
	
	})


}]);