angular.module('demoApp')


	.config(['$stateProvider', '$urlRouterProvider',function($stateProvider, $urlRouterProvider){


		$stateProvider
			.state('welcome',{
				url : '/welcome',
				templateUrl : 'guest/view/welcome.html',
				controller : 'welcomeCtrl'
			})
			.state('about',{
				url : '/about',
				templateUrl : 'guest/view/about.html',
				controller : 'aboutCtrl'
			})
			.state('contact',{
				url : '/contact',
				templateUrl : 'guest/view/contact.html',
				controller : 'contactCtrl'
			})
			.state('postHolders',{
				url : '/PostHolders',
				templateUrl : 'guest/view/PostHolders.html',
				controller : 'postHoldersCtrl'
			})
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
			.state('editStudent',{
				url : '/editStudent/:id',
				templateUrl : 'guest/view/editStudent.html',
				controller : 'editStudentCtrl'
			})



			$urlRouterProvider.otherwise('/welcome');


	}]);