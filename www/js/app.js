define([
  'runners'
, 'routes'
, 'crudSvc'
, 'stationsSvc'
, 'stationCtrl'
, 'vehicleCtrl'
],
    function (runners, routes, crudSvc, stationsSvc, stationCtrl, vehicleCtrl) {

        var app = angular.module('save-my-gas', ['ionic'])
            .run(runners.run)
            .factory('crud', crudSvc)
            .factory('stations', stationsSvc)
            .config(routes)
            .controller('GasStationCtrl', stationCtrl.GasStationCtrl)
            .controller('GasStationViewCtrl', stationCtrl.GasStationViewCtrl)
            .controller('VehicleCtrl', vehicleCtrl.VehicleCtrl)
            .controller('VehicleEditCtrl', vehicleCtrl.VehicleEditCtrl)

        return app

    })
