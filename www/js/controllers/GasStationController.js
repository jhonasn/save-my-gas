define(function () {

    var module = {
        GasStationCtrl: function ($scope, $http, crud) {
            if (navigator.network)
                $scope.connected = navigator.network.connection.type != Connection.NONE
            $scope.geolocation = null
            $scope.loadingGeolocation = false
            $scope.geolocationError = false
            $scope.gmapsError = false
            $scope.radius = 5000 //gmaps search radius

            //constantly refresh connected variable
            document.addEventListener("online", function () {
                $scope.connected = true
            }, false)
            document.addEventListener("offline", function () {
                $scope.connected = false
            }, false)

            $scope.updateStations = function () {
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
                        }, {
                            maximumAge: 3000,
                            timeout: 30000,
                            enableHighAccuracy: true
                        }
                    )
                } else {
                    $scope.geolocationError = true
                }
            }

            $scope.openUrl = function (url) {
                window.open(url, '_system')
            }

            $scope.loadStations = function () {

                $scope.gmapsError = false

                if (window.device) {
                    if (window.device.available && (!$scope.connected || $scope.geolocation == null)) {
                        return
                    }
                }

                $http.get('http://rest-service.guides.spring.io/greeting')
                    .success(function (data) {
                        $scope.springTest = data
                    })
                    .error(function (data, code) {
                        $scope.springTest = 'Error! : ' + code
                    })

                $http.get('https://maps.googleapis.com/maps/api/place/search/json', {
                        params: {
                            key: 'AIzaSyALizYdHgpXYI6IrE1W9jTlb8LB02nErzw',
                            location: '{0},{1}'
                                .replace('{0}', $scope.geolocation.coords.latitude)
                                .replace('{1}', $scope.geolocation.coords.longitude),
                            radius: $scope.radius,
                            sensor: true,
                            types: 'gas_station',
                            rankby: 'distance'
                        }
                    })
                    .success(function (data, status, headers, config) {
                        if (data.status == 'OK') {
                            $scope.stations = data.results
                        }
                    })
                    .error(function (data, status, headers, config) {
                        $scope.gmapsError = true
                    })

            }


            //start trying to get stations
            $scope.updateStations()
        },
        GasStationViewCtrl: function ($scope, $state, $stateParams, crud) {
            $scope.station = crud.get('station', $stateParams.id)
        }
    }

    module.GasStationCtrl.$inject = ['$scope', '$http', 'crud']
    module.GasStationViewCtrl.$inject = ['$scope', '$state', '$stateParams', 'crud']

    return module

})