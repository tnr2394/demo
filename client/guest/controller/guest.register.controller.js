angular.module('demoApp').
	controller('registerCtrl', ['$scope','$state','guestFactory',function($scope,$state,guestFactory){
		
		$scope.doAddStudent=function(x){

			//console.log(x);
			x['name'] = x['fname']+' '+x['mname']+' '+x['lname'];
			//console.log(x);
			guestFactory.addStudent(x)
			.then(function(response){
				alert("your form has been submitted. we will contact you shortly");
			},function(err){
				console.error("Error");
				console.error(err);
				alert("error");
			});	
		}
	}]);		