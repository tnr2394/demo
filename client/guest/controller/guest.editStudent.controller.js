angular.module('demoApp')
	.controller('editStudentCtrl',['$scope','$state','$stateParams','guestFactory',function($scope,$state,$stateParams,guestFactory){
			$scope.id= $stateParams.id;
		activate();
		function activate(){
			guestFactory.getStudent($scope.id)
			.then(function(response){
				$scope.student=response.data;

			},function(err){
				alert("something has gone wrong");
				console.log(err);
			});
		}

	}])