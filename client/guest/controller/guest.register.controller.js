angular.module('demoApp').
	controller('registerCtrl', ['$scope','$state','guestFactory',function($scope,$state,guestFactory){
		
		$scope.doAddStudent=function(x){
			guestFactory.addStudent(x)
			.then(function(response){
				$scope.reg=response.data;	
			},function(err){
				console.error("Error");
				console.error(err);
			});
		}
	}]);