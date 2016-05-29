angular.module('demoApp')
	.controller('getAllStudentCtrl',['$scope','$state','guestFactory',function($scope,$state,guestFactory){
		$scope.stateChange=function(x){
			$state.go('studentInfo',{id : x.id});
			
		};
		activate();

		function activate(){
			guestFactory.getAllStudents()
			.then(function(response){
				$scope.students=response.data;
			},function(error){
				console(error);
			});
			}
	}]);