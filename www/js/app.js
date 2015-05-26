define([
  'runners'
, 'routes'
, 'crudSvc'
, 'stationsSvc'
, 'convertersSvc'
, 'stationCtrl'
, 'vehicleCtrl'
],
    function (runners, routes, crudSvc, stationsSvc, convertersSvc, stationCtrl, vehicleCtrl) {
        var app = angular.module('save-my-gas', ['ionic'])
            .run(runners.run)
            .factory('crud', crudSvc)
            .factory('stations', stationsSvc)
            .factory('converters', convertersSvc)
            .config(routes)
            .controller('GasStationCtrl', stationCtrl.GasStationCtrl)
            .controller('GasStationViewCtrl', stationCtrl.GasStationViewCtrl)
            .controller('VehicleCtrl', vehicleCtrl.VehicleCtrl)
            .controller('VehicleEditCtrl', vehicleCtrl.VehicleEditCtrl)

        return app
    })
