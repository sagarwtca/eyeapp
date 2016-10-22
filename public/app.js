
var myApp = angular.module("myApp", ['ngRoute']);

myApp.config(['$routeProvider', function ($routeProvider) {
	$routeProvider.when('/', {
			templateUrl: '/views/home.html',
			controller: ''
		})
		
		.otherwise({
			redirectTo: '/'
		})
}]);