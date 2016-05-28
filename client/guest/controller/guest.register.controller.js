angular.module('demoApp' .
	controller('registerCtrl', ['$scope','$state','$guestFactory',function($scope,$state,guestFactory){
		
		activate();
		function activate(){
			guestFactory.registerForm()
			.then(function(response){
				$scope.reg=response.data;	
			},function(err){
				console.error("Error");
				console.error(err);
			});
		}
	}]);