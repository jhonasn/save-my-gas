define(function(){

  var module = {
    GasStationCtrl: function($scope, crud) {
      $scope.gasStations = crud.getAll('station')
    },
    GasStationViewCtrl: function($scope, $state, $stateParams, crud) {
      $scope.station = crud.get('station', $stateParams.id)
    }
  }

  module.GasStationCtrl.$inject = ['$scope', 'crud']
  module.GasStationViewCtrl.$inject = ['$scope', '$state', '$stateParams', 'crud']

  return module

})
