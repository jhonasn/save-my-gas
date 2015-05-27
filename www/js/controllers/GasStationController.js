define(function () {

    var module = {
        GasStationCtrl: function ($scope, $http, $ionicScrollDelegate, crud, stations) {
            if (navigator.network)
            $scope.connected = navigator.network.connection.type != Connection.NONE
            else
            $scope.connected = navigator.onLine

            $scope.gasStations = []
            $scope.geolocation = null
            $scope.radius = 5000
            var lastScroll = $ionicScrollDelegate.getScrollPosition()
            if(lastScroll)
            lastScroll = lastScroll.top
            else
            lastScroll = 0

            $scope.vehicle = crud.getByProp('vehicle', 'selected', true)

            //constantly refresh connected variable
            document.addEventListener("online", function () {
                $scope.connected = true
                console.log('online')
            }, false)
            document.addEventListener("offline", function () {
                $scope.connected = false
                console.log('offline')
            }, false)

            var updateLastScroll = function() {
                lastScroll = $ionicScrollDelegate.getScrollPosition().top
            }

            var getStationsError = function (errorType) {
                $scope.error = errorType
                if (errorType == stations.notifications.geolocationError)
                $scope.geolocationError = true
                else if (errorType == stations.notifications.stationError)
                $scope.gmapsError = true
            }
            var getStationsNotification = function (notification) {
                if (notification.type == stations.notifications.geolocationGet) {
                    if($scope.geolocation && $scope.geolocation.coords) {
                        $scope.newGeolocation = !($scope.geolocation.coords.latitude == notification.value.coords.latitude && $scope.geolocation.coords.longitude == notification.value.coords.longitude)
                    }
                    $scope.geolocation = notification.value
                }
            }
            var getStationsStart = function () {
                $scope.loading = true
                $scope.geolocationError = false
                $scope.gmapsError = false
            }

            $scope.updateStations = function (radius) {
                getStationsStart()

                stations.get(radius, $scope.vehicle)
                .then(function (results) {
                    $scope.gasStations = results
                    updateLastScroll()
                })
                .catch(getStationsError)
                .finally(function () {
                    $scope.loading = false
                    $scope.$broadcast('scroll.refreshComplete')
                },
                function(notification) {
                    getStationsNotification(notification)
                    if (notification.type == stations.notifications.stationGet) {
                        $scope.gasStations = notification.value
                    }
                }
            )
        }

        $scope.nextResults = function(radius, gasStations) {

            if($ionicScrollDelegate.getScrollPosition().top == lastScroll) {
                $scope.$broadcast('scroll.infiniteScrollComplete')
                return
            } else {
                updateLastScroll()
            }

            getStationsStart()

            stations.get(radius, $scope.vehicle, gasStations.nextPage)
            .then(function (results) {
                if($scope.newGeolocation) {
                    $scope.gasStations = results
                    updateLastScroll()
                }
                else {
                    $scope.gasStations = $scope.gasStations.concat(results)
                    $scope.gasStations.nextPage = results.nextPage
                }
            })
            .catch(getStationsError)
            .finally(function () {
                $scope.loading = false
                $scope.$broadcast('scroll.infiniteScrollComplete')
            },
            getStationsNotification
        )
    }

    $scope.openUrl = function (url) {
        window.open(url, '_system')
    }

    //start trying to get stations
    // $scope.$broadcast('scroll.infiniteScrollComplete')
    $scope.updateStations()
},
GasStationViewCtrl: function ($scope, $state, $stateParams, crud) {
    $scope.station = crud.get('station', $stateParams.id)
}
}

module.GasStationCtrl.$inject = ['$scope', '$http', '$ionicScrollDelegate', 'crud', 'stations']
module.GasStationViewCtrl.$inject = ['$scope', '$state', '$stateParams', 'crud']

return module

})
