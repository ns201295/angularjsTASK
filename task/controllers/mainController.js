var app = angular.module('task',['ngRoute']);

app.config(function($routeProvider){
	$routeProvider
	.when('/',{
		templateUrl: 'templates/home.html'
	})
	.when('/contacts',{
		templateUrl: 'templates/contacts.html'
	})
	.when('/aboutus',{
		templateUrl: 'templates/aboutus.html'
	})
	.when('/success',{
		templateUrl: 'templates/success.html',

	})
	.otherwise({
		redirectTo: '/'
	});
});


app.controller('myctrl',function($scope,$timeout,$location){
	$scope.users = [];

    $scope.editmode = 0;
    $scope.curr = -1;
    $scope.success = 0;

	$scope.submitf = function($user){
		$scope.users.push($user);


		$location.path("/contacts");

		$scope.user = new Object();

		$scope.success = 1;
		$timeout(function () {
        	$scope.success = 0;
    	}, 2000);

	}

	$scope.savef = function($user){
		$scope.users.splice($scope.curr,1);
		$scope.users.push($user);
		$scope.curr = -1;
		
		
		$scope.user = new Object();
		$scope.editmode = 0;
		$location.path("/contacts");

		$scope.success = 1;
		$timeout(function () {
        	$scope.success = 0;
    	}, 2000);
	}

	$scope.cancelf = function(){

		var $b = new Object();
		$scope.user = $b;
		$scope.editmode = 0;
		$scope.curr = -1;
		$location.path("/contacts");
	}

	$scope.rem = function($i){
		
		$scope.users.splice($i,1);
	}

	$scope.edit = function($i){
		$location.path("/");
		var $a = Object.create($scope.users[$i]);
		$scope.curr = $i;
		$scope.editmode = 1;
		$scope.user = $a;
	}
});











