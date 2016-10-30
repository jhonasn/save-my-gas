angular.module('save-my-gas')

.config(function($routeProvider, $locationProvider) {

	$routeProvider

	.when('/', {
		templateUrl: SaveMyGas.rootRoute.getPath('/views/home.html'),
		controller: 'homeController'
	})

	.when('/vehicle', {
		templateUrl: SaveMyGas.rootRoute.getPath('/views/vehicle/list.html'),
		controller: 'vehicleController'
	})

	.when('/vehicle/edit', {
		templateUrl: SaveMyGas.rootRoute.getPath('/views/vehicle/edit.html'),
		controller: 'vehicleEditController'
	})

	.when('/gas-station', {
		templateUrl: SaveMyGas.rootRoute.getPath('/views/gas-station/list.html'),
		controller: 'gasStationController'
	})

	.when('/gas-station/edit', {
		templateUrl: SaveMyGas.rootRoute.getPath('/views/gas-station/edit.html'),
		controller: 'gasStationEditController'
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
