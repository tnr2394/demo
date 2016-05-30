angular.module('demoApp')

	.factory('guestFactory',['$q','$http',function($q,$http){
		var obj = {};
		var defer = $q.defer();
		var res = function(response){defer.resolve(response);}
		var err = function(error){defer.reject(error);}
		obj.addStudent = function(x){
			$http.post("http://132.140.160.119/demo/server/insert.php",x)
			.then(res,err);
			return defer.promise;
		}
		obj.updateStudent = function(x){
			$http.post("http://132.140.160.119/demo/server/update.php?id="+x.id,x)
			.then(res,err);
			return defer.promise;
		}


		obj.getStudent = function(x){
			$http.get("http://132.140.160.119/demo/server/select_single.php?id="+x)
			.then(res,err);
			return defer.promise;
		}

		obj.getAllStudents = function(){
			$http.get("http://132.140.160.119/demo/server/select.php")
			.then(res,err);
			return defer.promise;
		}

		obj.editStudent = function(){
			$http.get("http://132.140.160.119/demo/server/select_single.php?id="+x)
			.then(res,err);
			return defer.promise;
		}
		obj.deleteStudent = function(x){
			$http.post("http://132.140.160.119/demo/server/delete.php?id="+x)
			.then(res,err);
			return defer.promise;
		}
		return obj;
	}]);