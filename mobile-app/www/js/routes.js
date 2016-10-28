angular.module('save-my-gas')

.config(function($routeProvider, $locationProvider) {

    $routeProvider

    .when('/', {
        templateUrl: SaveMyGas.rootRoute.getPath('/views/home.html'),
        controller: 'homeController'
    })

	.when('/vehicle', {
        templateUrl: SaveMyGas.rootRoute.getPath('/views/vehicle-list.html'),
        controller: 'vehicleController'
    })

    // .when('/login', {
    //     templateUrl: '/views/auth.html',
    //     controller: 'AuthController'
    // })

	.when('/logout', {
		template: 'loggin out...',
		controller: 'authLogoutController'
	})

    .otherwise({
        redirectTo: '/'
    })

})
