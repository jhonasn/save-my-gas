var app = angular.module('save-my-gas.controllers');

app.controller('VehicleCtrl', function($scope, $ionicModal, $timeout, $state) {
  $scope.vehicles = [
    { name: 'v1', power: 1.1, id: 1 },
    { name: 'v2', power: 1.2, id: 2 },
    { name: 'v3', power: 1.3, id: 3 },
    { name: 'v4', power: 1.4, id: 4 },
    { name: 'v5', power: 1.8, id: 5 },
    { name: 'v6', power: 2.0, id: 6 }
  ];

	// Form data for the login modal
  $scope.vehicle = {
    id: 0,
    name: '',
    power: null
  };

  $scope.editVehicle = function() {
    console.log($scope.vehicle);
    $state.go('/menu/vehicle-edit');
  }

  // Perform the login action when the user submits the login form
  $scope.saveVehicle = function() {
    console.log('saving vehicle', $scope.vehicle);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
});
