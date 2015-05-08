define(function(){

  var module = {
    GasStationCtrl: function($scope, $http, crud, $log) {
      $scope.gasStations = crud.getAll('station')
      //$scope.showGeolocation()

      $scope.connected = navigator.network.connection.type != Connection.NONE

      navigator.connection.getInfo(function(conntype){
        $scope.connected = conntype != Connection.NONE
        if($scope.connected) {
          $scope.loadStations()
        }
      })

      $scope.openUrl = function (url) {
        window.open(url, '_system')
      }

      $scope.loadStations = function() {

        if(!$scope.connected) {
          return
        }

        //test connection
        $http.get('http://google.com')
        .success($log.info)
        .error($log.warn)

        //first we need to get the position
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            function success(pos) {
              $scope.position = pos
              $scope.radius = 5000 //meters

              //second step
              getStations(pos)
            },
            function error(error) {
              $scope.position = 404
              console.error(error)
            },
            { maximumAge: 3000, timeout: 5000, enableHighAccuracy: true }
          )
        } else {
          $scope.position = 404
        }
      }

      function getStations(position) {
        $http.get('https://maps.googleapis.com/maps/api/place/search/json',
        {
          params: {
            key: 'AIzaSyALizYdHgpXYI6IrE1W9jTlb8LB02nErzw'
            , location: '{0},{1}'
            .replace('{0}', $scope.position.coords.latitude)
            .replace('{1}', $scope.position.coords.longitude)
            , radius: $scope.radius
            , sensor: true
            , types: 'gas_station'
            , rankby: 'distance'
          }
        })
        .success(function(data, status, headers, config) {
          if(data.status == 'OK') {
            $scope.stations = data.results
          }
        })
        .error(function(data, status, headers, config) {
          $scope.position = 404
        })
      }
    },
    GasStationViewCtrl: function($scope, $state, $stateParams, crud) {
      $scope.station = crud.get('station', $stateParams.id)
    }
  }

  module.GasStationCtrl.$inject = ['$scope', '$http', 'crud', '$log']
  module.GasStationViewCtrl.$inject = ['$scope', '$state', '$stateParams', 'crud']

  return module

})
