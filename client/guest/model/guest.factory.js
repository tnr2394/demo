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
		obj.getAllPostHolders = function(){

			$http.get("http://www.vvprotaract.club/server/guest/get_postholders.php")
			.then(res,err);
			return defer.promise;
		}
			
		obj.getAllTestimonials = function(){

			$http.get("http://www.vvprotaract.club/server/guest/get_events.php")
			.then(res,err);
			return defer.promise;
		}
		obj.addStudent = function(x){
			$http.post("http://132.140.160.119/demo/client/insert.php",x)
			.then(res,err);
			return defer.promice;
		}
		obj.updateStudent = function(){
			$http.post("http://132.140.160.119/demo/client/update.php")
			.then(res,err);
			return defer.promice;
		}

		obj.deleteStudent = function(){
			$http.post("http://132.140.160.119/demo/client/delete.php")
			.then(res,err);
			return defer.promice;
		}

		obj.getStudent = function(){
			$http.post("http://132.140.160.119/demo/client/select.php")
			.then(res,err);
			return defer.promice;
		}

		obj.getAllStudent = function(){
			$http.post("http://132.140.160.119/demo/client/select.php")
			.then(res,err);
			return defer.promice;
		}
		return obj;
	}]);