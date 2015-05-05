var app = angular.module('save-my-gas')

app.controller('VehicleCtrl', function($scope, $state, crud) {
  $scope.vehicles = crud.getAll('vehicle')
})

app.controller('VehicleEditCtrl', function($scope, $state, $stateParams, crud) {
  $scope.vehicle = crud.get('vehicle', $stateParams.id)

  $scope.saveVehicle = function(vehicle) {
    var entity = angular.copy(vehicle)

    if(crud.save('vehicle', entity)) {
      //show dialog or another message of saved
      delete $scope.vehicle
      $state.go('app.vehicle')
    } else {
      //show dialog or another message of error
    }
  }
})
