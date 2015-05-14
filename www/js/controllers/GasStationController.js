define(function(){

  var module = {
    GasStationCtrl: function($scope, $http, crud, $log) {
      $scope.connected = navigator.network.connection.type != Connection.NONE
      $scope.geolocation = null
      $scope.loadingGeolocation = false
      $scope.geolocationError = false

      //constantly refresh connected variable
      /*navigator.connection.getInfo(function(conntype){
        $scope.connected = conntype != Connection.NONE
      })*/
      document.addEventListener("online", function() { $scope.connected = true }, false)
      document.addEventListener("offline", function() { $scope.connected = false }, false)

      $scope.updateStations = function() {
        $scope.loadingGeolocation = true
        //refresh geolocation
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            function success(pos) {
              $scope.loadingGeolocation = false
              $scope.geolocationError = false
              $scope.geolocation = pos

              //refresh stations
              $scope.loadStations()
            },
            function error(error) {
              $scope.loadingGeolocation = false
              $scope.geolocationError = true
              console.error(error)
            },
            { maximumAge: 3000, timeout: 30000, enableHighAccuracy: true }
          )
        } else {
          $scope.geolocationError = true
        }
      }

      $scope.openUrl = function (url) {
        window.open(url, '_system')
      }

      $scope.loadStations = function() {

        if(!$scope.connected || $scope.geolocation == null) {
          return
        }

        //test connection
        $http.get('http://google.com')
        .success($log.info)
        .error($log.warn)

        /*
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
        */
      }

      //start trying to get stations
      $scope.updateStations()
    },
    GasStationViewCtrl: function($scope, $state, $stateParams, crud) {
      $scope.station = crud.get('station', $stateParams.id)
    }
  }

  module.GasStationCtrl.$inject = ['$scope', '$http', 'crud', '$log']
  module.GasStationViewCtrl.$inject = ['$scope', '$state', '$stateParams', 'crud']

  return module

})
