define(function () {

    var config = function ($stateProvider, $urlRouterProvider, $httpProvider) {
        $urlRouterProvider.otherwise('app/station')

        //allow CORS to browser tests
        if (!window.device) {
            $httpProvider.defaults.useXDomain = true;
            $httpProvider.defaults.withCredentials = false;
            delete $httpProvider.defaults.headers.common['X-Requested-With'];
        }

        //I don't know what is it but..
        //$http.defaults.headers.common['Access-Control-Allow-Origin'] = '*';



        $stateProvider

            .state('app', {
            url: '/app',
            abstract: true,
            templateUrl: "templates/menu.html"
        })

        .state('app.station', {
            url: '/station',
            views: {
                'menuContent': {
                    templateUrl: "templates/gas-station-list.html",
                    controller: 'GasStationCtrl'
                }
            }
        })

        .state('app.station-view', {
            url: '/edit/:id',
            views: {
                'menuContent': {
                    templateUrl: 'templates/gas-station-view.html',
                    controller: 'GasStationViewCtrl'
                }
            }
        })

        .state('app.vehicle', {
            url: '/vehicle',
            cache: false,
            views: {
                'menuContent': {
                    templateUrl: 'templates/vehicle-list.html',
                    controller: 'VehicleCtrl'
                }
            }
        })

        .state('app.vehicle-edit', {
            url: '/vehicle/:id',
            views: {
                'menuContent': {
                    templateUrl: 'templates/vehicle-edit.html',
                    controller: 'VehicleEditCtrl'
                }
            }
        })

    }

    config.$inject = ['$stateProvider', '$urlRouterProvider', '$httpProvider']

    var module = {
        routes: config
    }

    return module

})
