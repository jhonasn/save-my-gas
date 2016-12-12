angular.module('save-my-gas')

.config(function($routeProvider, $locationProvider) {

	$routeProvider

	// .when('/', {
	// 	templateUrl: SaveMyGas.rootRoute.getPath('/views/home.html'),
	// 	controller: 'homeController'
	// })

	.when('/vehicle', {
		templateUrl: SaveMyGas.rootRoute.getPath('/views/vehicle/list.html'),
		controller: 'vehicleController',
		resolve: {
			collection: function (vehicleService) {
				return vehicleService.getCollection().$promise
			}
		}
	})

	.when('/vehicle/create', {
		templateUrl: SaveMyGas.rootRoute.getPath('/views/vehicle/edit.html'),
		controller: 'vehicleEditController',
		resolve: {
			model: function(authService) {
				return { ownerId: authService.getUser().userId }
			}
		}
	})

	.when('/vehicle/update/:id', {
		templateUrl: SaveMyGas.rootRoute.getPath('/views/vehicle/edit.html'),
		controller: 'vehicleEditController',
		resolve: {
			model: function ($route, vehicleService) {
				return  vehicleService.findById($route.current.params.id).$promise
			}
		}
	})

	.when('/vehicle-refuel', {
		templateUrl: SaveMyGas.rootRoute.getPath('/views/vehicle-refuel/list.html'),
		controller: 'vehicleRefuelController',
		resolve: {
			vehicles: function (vehicleService) {
				return vehicleService.getCollection().$promise
			}
		}
	})

	.when('/vehicle-refuel/create/:vehicleId', {
		templateUrl: SaveMyGas.rootRoute.getPath('/views/vehicle-refuel/edit.html'),
		controller: 'vehicleRefuelEditController'
	})

	.when('/simulator', {
		templateUrl: SaveMyGas.rootRoute.getPath('/views/simulator/list.html'),
		controller: 'simulatorController'
	})

	.when('/gas-station', {
		templateUrl: SaveMyGas.rootRoute.getPath('/views/gas-station/list.html'),
		controller: 'gasStationController'
	})

	.when('/gas-station/edit', {
		templateUrl: SaveMyGas.rootRoute.getPath('/views/gas-station/edit.html'),
		controller: 'gasStationEditController'
	})

	.when('/reports', {
		templateUrl: SaveMyGas.rootRoute.getPath('/views/reports/list.html'),
		controller: 'reportsController'
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
		// redirectTo: '/'
		// temporary
		redirectTo: '/vehicle'
	})

})
