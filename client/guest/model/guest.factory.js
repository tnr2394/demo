angular.module('demoApp')

	.factory('guestFactory',['$q','$http',function($q,$http){
		var obj = {};
		var defer = $q.defer();
		var res = function(response){defer.resolve(response);}
		var err = function(error){defer.reject(error);}

		obj.getAllEvents = function(){

			$http.get("http://www.vvprotaract.club/server/guest/get_events.php")
			.then(res,err);
			return defer.promise;
		}
	
		obj.getAllTestimonials = function(){

			$http.get("http://www.vvprotaract.club/server/guest/get_events.php")
			.then(res,err);
			return defer.promise;
		}

		return obj;
	}]);