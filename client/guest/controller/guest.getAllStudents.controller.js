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

			$scope.deleteEvent = function(x){
				guestFactory.deleteEvent(x)
					.then(function(response){
						activate();
					},function (err) {
						 alert("student could not be deleted"); 
					}) 
			}

			}
	}]);