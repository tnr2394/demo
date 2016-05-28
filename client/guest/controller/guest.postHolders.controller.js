angular.module('demoApp')
	.controller('postHoldersCtrl',['$scope','$state','guestFactory',function($scope,$state,guestFactory) {
		activate();
		function activate(){
			guestFactory.getAllPostHolders()
			.then(function(response){
				$scope.postHolders= response.data;
				console.log($scope.postHolders.length+" postholders loaded");
			},function(error){
				console(error);
			});
		}
	}]);
		  
	
