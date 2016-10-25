angular.module('save-my-gas').config(function($routeProvider, $locationProvider, appConstants) {

	$routeProvider

	.when('/', {
		templateUrl: '/views/auth.html',
		controller: 'AuthController'
	})

	.when('/login', {
		templateUrl: '/views/auth.html',
		controller: 'AuthController'
	})

	.otherwise({
        redirectTo: '/'
    })

})
