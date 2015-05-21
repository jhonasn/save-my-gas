define(function () {

    var module = function ($http, $q) {
        var defered = $q.defer()

        var moduleScope = this
        this.gmAppKey = 'theKey'
        this.geolocaionStr = null
        this.stations = null
        this.radius = 5000
        this.notifications = {
            geolocationGet: 0,
            geolocationError: 1,
            stationGet: 2,
            stationError: 3,
            noInternetError: 4
        }

        function Notification(type, value) {
            this.type = type
            this.value = value
            this.message = value
        }

        this.getGeolocation = function (nextPage) {
            if (navigator.geolocation) {
                var success = function (pos) {
                    defered.notify(new Notification(moduleScope.notifications.geolocationGet, pos))

                    moduleScope.geolocaionStr = geolocationToString(pos)

                    //                                        //verify internet connection
                    //                                    //for production
                    //                                        if (window.device) {
                    //                                            if (window.device.available && (!$scope.connected || $scope.geolocation == null)) {
                    //                                                defered.reject(moduleScope.notifications.noInternetError)
                    //                                            }
                    //                                        }

                    //refresh stations
                    moduleScope.getNearStations(nextPage)
                }

                var error = function (error) {
                    console.error('geolocation error')
                    console.error(error)
                    defered.reject(moduleScope.notifications.geolocationError)
                }

                var options = {
                    maximumAge: 3000,
                    timeout: 30000,
                    enableHighAccuracy: true
                }

                navigator.geolocation.getCurrentPosition(success, error, options)
            } else {
                //for test
                geolocation = {
                    coords: {
                        latitude: '-25.4544031',
                        longitude: '-49.560799,21'
                    }
                }
                moduleScope.geolocaionStr = geolocationToString(pos)
                moduleScope.getNearStations()
                console.info('no geolocation accessible, using fake geolocation')
                    //for test end


                //for production
                //                console.error('no geolocation accessible')
                //            defered.reject(moduleScope.notifications.geolocationError)
            }
        }

        this.getNearStations = function (nextPage) {
            var parameters = {}
            if (!nextPage) {
                parameters = {
                    key: moduleScope.gmAppKey,
                    location: moduleScope.geolocaionStr,
                    radius: moduleScope.radius, //pass radius or pass rankBy. max: 50 000 (meters)
                    types: 'gas_station'
                }
            } else {
                parameters = {
                    key: moduleScope.gmAppKey,
                    pagetoken: nextPage
                }
            }
            $http.get('https://maps.googleapis.com/maps/api/place/nearbysearch/json', {
                    params: parameters
                })
                .success(function (data) {
                    console.info('success places response')
                    if (data.status == 'OK') {
                        moduleScope.stations = data.results.map(function (place, i) {
                            return {
                                name: place.name,
                                address: place.vicinity,
                                location: place.geometry.location
                            }
                        })

                        var destinationsPoints = moduleScope.stations.map(function (station) {
                            return '{0}{1}'
                                .replace('{0}', station.location.lat)
                                .replace('{1}', station.location.lng)
                        })

                        if (data.next_page_token)
                            moduleScope.stations.nextPage = data.next_page_token

                        defered.notify(new Notification(moduleScope.notifications.stationGet, moduleScope.stations))
                        moduleScope.getDistanceStations(destinationsPoints)
                    } else {
                        console.error('Error Near by Search Status: ' + data.status)
                        console.error(data)
                        defered.reject(moduleScope.notifications.stationError)
                    }
                })
                .error(function (res, code) {
                    defered.reject(moduleScope.notifications.stationError)
                    console.error('Error Near by Search Code: ' + code)
                    console.error(res)
                })
        }

        this.getDistanceStations = function (destinationsPoints) {
            $http.get('https://maps.googleapis.com/maps/api/distancematrix/json', {
                    params: {
                        //key: this.gmAppKey,
                        origins: this.geolocaionStr,
                        destinations: destinationsPoints.join('|'),
                        travelMode: 'DRIVING'
                    }
                })
                .success(function (dataDist) {
                    console.info('success distance response')

                    if (dataDist.status == 'OK') {
                        var results = dataDist.rows[0].elements

                        for (var i = 0; i < moduleScope.stations.length; i++) {
                            moduleScope.stations[i].distance = results[i].distance
                            moduleScope.stations[i].duration = results[i].duration
                            moduleScope.stations[i].addressPrecise = dataDist.destination_addresses[i]
                        }

                        moduleScope.stations = moduleScope.stations.sort(function (a, b) {
                            return a.distance.value - b.distance.value
                        })

                        console.info('stations updated')
                        defered.resolve(moduleScope.stations)
                    } else {
                        console.error('Error Distance Status: ' + dataDist.status)
                        console.error(dataDist)
                        defered.reject(moduleScope.notifications.stationError)
                    }
                })
                .error(function (resDist, codeDist) {
                    defered.reject(moduleScope.notifications.stationError)
                    console.error('Error Distance Code: ' + codeDist)
                    console.error(res)
                })
        }

        var geolocationToString = function (geolocation) {
            return '{0},{1}'
                .replace('{0}', geolocation.coords.latitude)
                .replace('{1}', geolocation.coords.longitude)
        }

        return {
            get: function (radius, nextPage) {
                if (radius)
                    moduleScope.radius = radius
                moduleScope.getGeolocation(nextPage)
                return defered.promise
            },
            notifications: this.notifications
        }
    }

    module.$inject = ['$http', '$q']

    return module

})
