require.config({
    baseUrl: '',
    paths: {
        cordova: 'cordova',
        ionic: 'lib/ionic/js/ionic.bundle',
        app: 'js/app',
        runners: 'js/runners',
        routes: 'js/routes',
        crudSvc: 'js/services/crud',
        stationsSvc: 'js/services/stations',
        convertersSvc: 'js/services/converters',
        stationCtrl: 'js/controllers/GasStationController',
        vehicleCtrl: 'js/controllers/VehicleController'
    },
    shim: {
        ionic: {
            exports: 'ionic',
            deps: ['cordova']
        },
        app: {
            deps: ['ionic']
        }
    },
    priority: [
        'ionic'
    ],
    deps: ['js/bootstrap']
})

require(['app'], function () {})
