define(function () {

    var module = {
        GasStationCtrl: function ($scope, $http, crud) {
            if (navigator.network)
                $scope.connected = navigator.network.connection.type != Connection.NONE
            $scope.geolocation = null
            $scope.loadingGeolocation = false
            $scope.geolocationError = false
            $scope.gmapsError = false
            $scope.radius = 5000 //gmaps search radius need to implement (maybe)

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

                //                //for production
                //                if (window.device) {
                //                    if (window.device.available && (!$scope.connected || $scope.geolocation == null)) {
                //                        return
                //                    }
                //                }

                //for test
                if (!$scope.geolocation) {
                    $scope.geolocation = {
                        coords: {
                            latitude: '-25.4544031',
                            longitude: '-49.560799,21'
                        }
                    }
                }

                var geolocaionStr = '{0},{1}'
                    .replace('{0}', $scope.geolocation.coords.latitude)
                    .replace('{1}', $scope.geolocation.coords.longitude)

                $http.get('https://maps.googleapis.com/maps/api/place/nearbysearch/json', {
                        params: {
                            key: 'AIzaSyAhxGIkGQ9Xi6fUi61W7_4fuiyQ6yMt6y8',
                            location: geolocaionStr,
                            radius: $scope.radius, //pass radius or pass rankBy. max: 50 000 (meters)
                            types: 'gas_station',
                            rankBy: 'distance',
                        }
                    })
                    .success(function (data) {
                        console.info('success places response')
                        console.log(data)
                        if (data.status == 'OK') {
                            $scope.gasStations = data.results.map(function (place, i) {
                                return {
                                    name: place.name,
                                    address: place.vicinity,
                                    location: place.geometry.location
                                }
                            })

                            var destinationsPoints = $scope.gasStations.map(function (station) {
                                return '{0}{1}'
                                    .replace('{0}', station.location.lat)
                                    .replace('{1}', station.location.lng)
                            })

                            $http.get('https://maps.googleapis.com/maps/api/distancematrix/json', {
                                    params: {
                                        origins: geolocaionStr,
                                        destinations: destinationsPoints.join('|'),
                                        travelMode: 'DRIVING'
                                    }
                                })
                                .success(function (dataDist) {
                                    console.info('success distance response')
                                    console.log(dataDist)

                                    if (dataDist.status == 'OK') {
                                        var results = dataDist.rows[0].elements

                                        for (var i = 0; i < $scope.gasStations.length; i++) {
                                            $scope.gasStations[i].distance = results[i].distance
                                            $scope.gasStations[i].duration = results[i].duration
                                            $scope.gasStations[i].addressPrecise = dataDist.destination_addresses[i]
                                        }

                                        $scope.gasStations = $scope.gasStations.sort(function (a, b) {
                                            return a.distance.value - b.distance.value
                                        })

                                        console.info('gasStations updated')
                                    }
                                })
                                .error(function (resDist, codeDist) {
                                    $scope.gmapsError = true
                                    console.error('error distance response: ' + code)
                                    console.log(res)
                                })
                        }
                    })
                    .error(function (res, code) {
                        $scope.gmapsError = true
                        console.error('error places response: ' + code)
                        console.log(res)
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
