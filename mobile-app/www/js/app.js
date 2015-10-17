define([
    'runners'
    , 'routes'
    , 'directives'
    , 'crudSvc'
    , 'stationsSvc'
    , 'convertersSvc'
    , 'stationCtrl'
    , 'vehicleCtrl'
],
function (runners, routes, directives, crudSvc, stationsSvc, convertersSvc, stationCtrl, vehicleCtrl) {
    var app = angular.module('save-my-gas', ['ionic'])
    .run(runners.readyRunner)
    .factory('crud', crudSvc)
    .factory('stations', stationsSvc)
    .factory('converters', convertersSvc)
    .config(routes)
    .directive('scrollShowHide', directives.scrollShowHide)
    .controller('GasStationCtrl', stationCtrl.GasStationCtrl)
    .controller('GasStationViewCtrl', stationCtrl.GasStationViewCtrl)
    .controller('VehicleCtrl', vehicleCtrl.VehicleCtrl)
    .controller('VehicleEditCtrl', vehicleCtrl.VehicleEditCtrl)

    return app
})
