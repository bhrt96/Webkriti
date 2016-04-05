angular.module('appRoutes', ['ngRoute'])

.config(function($routeProvider, $locationProvider){
	$routeProvider
		.when('/books', {
			templateUrl: 'app/views/pages/books.html',
		})
		.when('/electronics', {
			templateUrl: 'app/views/pages/electronics.html',
		})
		.when('/sports', {
			templateUrl: 'app/views/pages/sports.html',
		})
		.when('/others', {
			templateUrl: 'app/views/pages/others.html',
		})
		.otherwise({
			templateUrl: 'app/views/pages/home.html',
		})

	$locationProvider.html5Mode(true);
});