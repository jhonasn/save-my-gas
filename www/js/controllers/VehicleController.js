define(function(){

  var module = {
    VehicleCtrl: function($scope, $state, $ionicPopup, crud) {
      $scope.vehicles = crud.getAll('vehicle')

      $scope.delete = function(vehicle) {
        var confirmPopup = $ionicPopup.confirm({
          title: 'Delete',
          template: 'Do you want delete this vehicle?'
       })
       .then(function(yes) {
         if(yes) {

           var data = { title: 'Result' }
           if(crud.delete('vehicle', vehicle)) {
             //show success message
             data.msg = 'deleted!'
             $scope.vehicles = crud.getAll('vehicle')
           } else {
             //show error message
             data.msg = '!error!'
           }

           //temporary message
           $ionicPopup.alert({
             title: data.title,
             template: data.msg
           })
         }
       })
     }

    },
    VehicleEditCtrl: function($scope, $state, $stateParams, crud) {
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
    }
  }

  module.VehicleCtrl.$inject = ['$scope', '$state', '$ionicPopup', 'crud']
  module.VehicleEditCtrl.$inject = ['$scope', '$state', '$stateParams', 'crud']

  return module

})
