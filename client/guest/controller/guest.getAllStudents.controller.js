angular.module('demoApp')
	.controller('getAllStudentCtrl',['$scope','$state','guestFactory',function($scope,$state,guestFactory){
		activate();
		
		function activate(){
			guestFactory.getAllStudent()
			.then(function(response){
				$scope.students=response.data;
			},function(error){
				console(error);
			});
			}
	}]);