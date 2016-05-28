angular.module('demoApp')
	.controller('aboutCtrl',['$scope','$state','guestFactory',function($scope,$state,guestFactory){

		activate();
		function activate(){
			guestFactory.getAllEvents()
				.then(function(response){
					$scope.events = response.data;
					console.log($scope.events.length+" Events Loaded");
				},function(err){
					console.error("Error");
					console.error(err);

				});
		}


	}]);