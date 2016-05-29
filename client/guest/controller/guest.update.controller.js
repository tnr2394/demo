angular.module('demoApp')
	.controller('updateCtrl',['$scope','$state','guestFactory',function($scope,$state,guestFactory){

		$scope.doUpdateStudent=function(x){
			guestFactory.updateStudent(x)
			.then(function(responce){
				console(responce);
			},function(err){
				console.error("Error");
				console.error(err);
			});
		}
	}]);