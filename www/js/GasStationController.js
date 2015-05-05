var app = angular.module('save-my-gas')

app.controller('GasStationCtrl', function($scope, crud) {
  $scope.gasStations = crud.getAll('station')
})

app.controller('GasStationViewCtrl', function($scope, $state, $stateParams, crud) {
  $scope.station = crud.get('station', $stateParams.id)
})
