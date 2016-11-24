angular.module('save-my-gas')

.config(function($routeProvider, $locationProvider) {

	$routeProvider

	.when('/', {
		templateUrl: SaveMyGas.rootRoute.getPath('/views/home.html'),
		controller: 'homeController'
	})

	// .when('/login', {
	//     templateUrl: '/views/auth.html',
	//     controller: 'AuthController'
	// })

	.when('/logout', {
		template: 'Fazendo logoff...',
		controller: 'authLogoutController'
	})

	.otherwise({
		redirectTo: '/'
	})

})
