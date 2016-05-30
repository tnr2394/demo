angular.module('demoApp')
	.controller('editStudentCtrl',['$scope','$state','$stateParams','guestFactory',function($scope,$state,$stateParams,guestFactory){

		var id= $stateParams.student;
		activate();
		function activate(){
			guestFactory.getStudent(id)
			.then(function(response){
				$scope.student=response.data;
				$scope.student['phone'] = parseInt($scope.student['phone']);

			},function(err){
				alert("something has gone wrong");
				console.log(err);
			});
		}

		$scope.doUpdate = function(x){
			guestFactory.updateStudent(x)
			.then(function(res){
				console.log(res.data);
			},
			function(e){
				console.error(e);
			});
		}
	}])