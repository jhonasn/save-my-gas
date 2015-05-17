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

                //                //for test internet connection//                $http.get('http://rest-service.guides.spring.io/greeting')
                //                    .success(function (data) {
                //                        $scope.springTest = data
                //                    })
                //                    .error(function (data, code) {
                //                        $scope.springTest = 'Error! : ' + code
                //                    })

                var map = new google.maps.Map(document.createElement('div'))

                var placesSvc = new google.maps.places.PlacesService(map)
                var distanceSvc = new google.maps.DistanceMatrixService()

                var geolocationLatLng = new google.maps.LatLng($scope.geolocation.coords.latitude, $scope.geolocation.coords.longitude)

                placesSvc.nearbySearch({
                        location: geolocationLatLng,
                        //radius: $scope.radius,//pass radius or pass rankBy. max: 50 000 (meters)
                        types: ['gas_station'],
                        rankBy: google.maps.places.RankBy.DISTANCE
                    },
                    function (results, status) {
                        if (status == google.maps.places.PlacesServiceStatus.OK) {
                            $scope.gasStations = results.map(function (place, i) {
                                return {
                                    name: place.name,
                                    address: place.vicinity,
                                    location: place.geometry.location
                                }
                            })

                            var destinationsPoints = $scope.gasStations.map(function (station) {
                                return station.location
                            })

                            distanceSvc.getDistanceMatrix({
                                    origins: [geolocationLatLng],
                                    destinations: destinationsPoints,
                                    travelMode: google.maps.TravelMode.DRIVING
                                },
                                function (responseDistance, statusDistance) {
                                    if (statusDistance == google.maps.DistanceMatrixStatus.OK) {
                                        var results = responseDistance.rows[0].elements

                                        for (var i = 0; i < $scope.gasStations.length; i++) {
                                            $scope.gasStations[i].distance = results[i].distance
                                            $scope.gasStations[i].duration = results[i].duration
                                            $scope.gasStations[i].addressPrecise = responseDistance.destinationAddresses[i]
                                        }

                                        $scope.gasStations = $scope.gasStations.sort(function (a, b) {
                                            return a.distance.value - b.distance.value
                                        })

                                        console.info('gasStations updated')
                                        console.log($scope.gasStations)
                                    }
                                })
                        }
                    }
                )

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
