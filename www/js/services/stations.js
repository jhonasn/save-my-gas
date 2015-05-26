define(function () {

    var module = {}
    module.exports = {}

    module.exports.notifications = {
        geolocationGet: 0,
        geolocationError: 1,
        stationGet: 2,
        stationError: 3,
        noInternetError: 4
    }

    module.defered = null
    module.geolocaionStr = null
    module.stations = null
    module.radius = 5000
    module.geolocationToString = function (geolocation) {
        return '{0},{1}'
            .replace('{0}', geolocation.coords.latitude)
            .replace('{1}', geolocation.coords.longitude)
    }
    module.Notification = function (type, value) {
        this.type = type
        this.value = value
        this.message = value
    }

    module.getGeolocation = function (nextPage) {
        if (navigator.geolocation) {
            var success = function (pos) {
                module.defered.notify(new module.Notification(module.exports.notifications.geolocationGet, pos))

                module.geolocaionStr = module.geolocationToString(pos)

                //                                        //verify internet connection
                //                                    //for production
                //                                        if (window.device) {
                //                                            if (window.device.available && (!$scope.connected || $scope.geolocation == null)) {
                //                                                module.defered.reject(module.exports.notifications.noInternetError)
                //                                            }
                //                                        }

                //refresh stations
                module.getNearStations(nextPage)
            }

            var error = function (error) {
                console.error('geolocation error')
                console.error(error)
                module.defered.reject(module.exports.notifications.geolocationError)
            }

            var options = {
                maximumAge: 3000,
                timeout: 30000,
                enableHighAccuracy: true
            }

            navigator.geolocation.getCurrentPosition(success, error, options)
        } else {
            //for test
            var pos = {
                coords: {
                    latitude: '-25.4544031',
                    longitude: '-49.560799,21'
                }
            }

            module.defered.notify(new module.Notification(module.exports.notifications.geolocationGet, pos))

            module.geolocaionStr = module.geolocationToString(pos)

            console.info('no geolocation accessible, using fake geolocation')
            module.getNearStations()
                //for test end

            //for production
            //                console.error('no geolocation accessible')
            //            module.defered.reject(module.exports.notifications.geolocationError)
        }
    }

    module.getNearStations = function (nextPage) {
        var parameters = {}
        if (!nextPage) {
            parameters = {
                key: module.gmAppKey,
                location: module.geolocaionStr,
                radius: module.radius, //pass radius or pass rankBy. max: 50 000 (meters)
                types: 'gas_station'
            }
        } else {
            parameters = {
                key: module.gmAppKey,
                pagetoken: nextPage
            }
        }
        module.$http.get('http://localhost:8100/google/places.search/json', {
                params: parameters
            })
            .success(function (data) {
                console.info('success places response')
                if (data.status == 'OK') {
                    module.stations = data.results.map(function (place, i) {
                        return {
                            name: place.name,
                            address: place.vicinity,
                            location: place.geometry.location
                        }
                    })

                    var destinationsPoints = module.stations.map(function (station) {
                        return '{0}{1}'
                            .replace('{0}', station.location.lat)
                            .replace('{1}', station.location.lng)
                    })

                    if (data.next_page_token)
                        module.stations.nextPage = data.next_page_token

                    module.defered.notify(new module.Notification(module.exports.notifications.stationGet, module.stations))
                    module.getDistanceStations(destinationsPoints)
                } else {
                    console.error('Error Near by Search Status: ' + data.status)
                    console.error(data)
                    module.defered.reject(module.exports.notifications.stationError)
                }
            })
            .error(function (res, code) {
                module.defered.reject(module.exports.notifications.stationError)
                console.error('Error Near by Search Code: ' + code)
                console.error(res)
            })
    }

    module.getDistanceStations = function (destinationsPoints) {
        module.$http.get('http://localhost:8100/google/distance.matrix/json' , {
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

                    for (var i = 0; i < module.stations.length; i++) {
                        module.stations[i].distance = results[i].distance
                        module.stations[i].duration = results[i].duration
                        module.stations[i].addressPrecise = dataDist.destination_addresses[i]

                        var distanceParams = [results[i].distance, module.car]
                        if(!module.car || !module.car.unit) {
                          module.stations[i].fuelSpend = 'select a car to see fuel spend'
                        } else if(module.car.unit == module.converters.consumption.units.kpl) {
                          module.stations[i].fuelSpend = module.converters.distance.distanceLitersConsumption.apply(null, distanceParams)
                        } else if(module.car.unit == module.converters.consumption.units.mpg) {
                          module.stations[i].fuelSpend = module.converters.distance.distanceGalonsConsumption.apply(null, distanceParams)
                        } else if(module.car.unit == module.converters.consumption.units.mpgus) {
                          module.stations[i].fuelSpend = module.converters.distance.distanceGalonsUsConsumption.apply(null,distdistanceParams)
                        } else {
                          module.stations[i].fuelSpend = 'select a car consumption unit to see fuel spend'
                        }
                    }

                    module.stations = module.stations.sort(function (a, b) {
                        return a.distance.value - b.distance.value
                    })

                    console.info('stations updated')
                    module.defered.resolve(module.stations)
                } else {
                    console.error('Error Distance Status: ' + dataDist.status)
                    console.error(dataDist)
                    module.defered.reject(module.exports.notifications.stationError)
                }
            })
            .error(function (resDist, codeDist) {
                module.defered.reject(module.exports.notifications.stationError)
                console.error('Error Distance Code: ' + codeDist)
                console.error(res)
            })
    }

    module.exports.get = function (radius, car, nextPage) {
        module.defered = module.$q.defer()
        if (radius)
            module.radius = radius
        module.car = car
        module.getGeolocation(nextPage)
        return module.defered.promise
    }

    module.constructor = function ($http, $q, converters) {
        module.$q = $q
        module.$http = $http
        module.converters = converters
        return module.exports
    }

    module.constructor.$inject = ['$http', '$q', 'converters']

    return module.constructor
})
