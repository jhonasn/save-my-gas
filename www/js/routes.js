define(function(app) {

	var config = function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('app/station')

    $stateProvider
    .state('app', {
      url: '/app',
      abstract: true,
      templateUrl: "/templates/menu.html"
    })

    .state('app.station', {
      url: '/station',
      views: {
        'menuContent': {
          templateUrl: "/templates/gas-station-list.html",
          controller: 'GasStationCtrl'
        }
      }
    })
    .state('app.station-view', {
      url: '/edit/:id',
      views: {
        'menuContent': {
          templateUrl: '/templates/gas-station-view.html',
          controller: 'GasStationViewCtrl'
        }
      }
    })

    .state('app.vehicle', {
      url: '/vehicle',
			cache: false,
      views: {
        'menuContent': {
          templateUrl: '/templates/vehicle-list.html',
          controller: 'VehicleCtrl'
        }
      }
    })
    .state('app.vehicle-edit', {
      url: '/vehicle/:id',
      views: {
        'menuContent': {
          templateUrl: '/templates/vehicle-edit.html',
          controller: 'VehicleEditCtrl'
        }
      }
    })

  }

	config.$inject = ['$stateProvider', '$urlRouterProvider']

	var module = {
		routes: config
	}

	return module

})
