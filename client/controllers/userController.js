app.controller('userController', ['$scope', 'userFactory', "$location", function($scope, userFactory, $location){
	
	$scope.login = function(){
		if(!$scope.logReg||$scope.logReg.name.length <3){
			alert('name isnt 3 characters');
		}
		else {userFactory.login($scope.logReg);
			$location.url('/dashboard')
		}
	}




}]);