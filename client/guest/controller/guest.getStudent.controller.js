angular.module('demoApp')
	.controller('getStudentCtrl',function($state,$scope,$stateParams,guestFactory){
		console.log($stateParams.id);

		$scope.stateChange=function(x){
			console.log(x);
			$state.go('editstudent',{student : x.id});
		};
				
		activate($stateParams.id);
		function activate(x){
			$scope.student=null;
			guestFactory.getStudent(x).then(function(response){
				$scope.student = response.data;
				
				console.log($scope.student);
			},function(err){
				alert("There seems to be some error. Please try again later.");
				console.error(err);
			})
			
			$scope.deleteStudent = function(x){
				guestFactory.deleteStudent(x)
					.then(function(response){
						$state.go('getAllStudents');
					},function (err) {
						 alert("student could not be deleted"); 
					}) 
			}

		}
	});