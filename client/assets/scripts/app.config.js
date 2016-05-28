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

			$urlRouterProvider.otherwise('/welcome');


	}]);