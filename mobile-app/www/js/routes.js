angular.module('save-my-gas').config(function($routeProvider, $locationProvider, appConstants) {

	$routeProvider

	.when('/', {
		templateUrl: '/views/main.html',
		controller: 'MainController',
		resolve: {
			config: function(appConfigService) {
				return appConfigService
			}
		}
	})

	.when('/login', {
		templateUrl: '/views/auth.html',
		controller: 'AuthController'
	})

	.otherwise({
        redirectTo: '/'
    })

})
