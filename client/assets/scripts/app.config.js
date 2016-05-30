angular.module('demoApp')


	.config(['$stateProvider', '$urlRouterProvider',function($stateProvider, $urlRouterProvider){


		$stateProvider
			
			.state('register',{
				url : '/register',
				templateUrl : 'guest/view/register.html',
				controller : 'registerCtrl'
			})
			.state('getAllStudents',{
				url : '/getstudents',
				templateUrl : 'guest/view/getstudents.html',
				controller : 'getAllStudentCtrl'
			})
			.state('studentInfo',{
				url : '/getstdents/:id',
				templateUrl : 'guest/view/info.html',
				controller : 'getStudentCtrl'
			})
			.state('editstudent',{
				url : '/editstudent/:student',
				templateUrl : 'guest/view/editstudent.html',
				controller : 'editStudentCtrl'
			})



			$urlRouterProvider.otherwise('/register');


	}]);