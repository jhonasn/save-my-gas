define([
  'runners'
, 'factories'
, 'routes'
, 'stationCtrl'
, 'vehicleCtrl'
],
function(runners, factories, routes, stationCtrl, vehicleCtrl) {

  var app = angular.module('save-my-gas', ['ionic'])
  .run(runners.run)
  .factory('crud', factories.crud)
  .config(routes.routes)
  .controller('GasStationCtrl', stationCtrl.GasStationCtrl)
  .controller('GasStationViewCtrl', stationCtrl.GasStationViewCtrl)
  .controller('VehicleCtrl', vehicleCtrl.VehicleCtrl)
  .controller('VehicleEditCtrl', vehicleCtrl.VehicleEditCtrl)

  return app

})
