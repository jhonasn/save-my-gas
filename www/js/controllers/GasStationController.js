define(function () {

    var module = {
        GasStationCtrl: function ($scope, $http, crud, stations) {
            if (navigator.network)
                $scope.connected = navigator.network.connection.type != Connection.NONE
            $scope.geolocation = null
            $scope.radius = 5000
            $scope.pagination = {
                current: 1,
                total: 1,
                pages: []
            }

            //constantly refresh connected variable
            document.addEventListener("online", function () {
                $scope.connected = true
            }, false)
            document.addEventListener("offline", function () {
                $scope.connected = false
            }, false)

            $scope.updateStations = function (radius, nextPage) {
                $scope.loading = true
                $scope.geolocationError = false
                $scope.gmapsError = false
                if (!radius) {
                    radius = 5000
                }
                if (nextPage) {
                    $scope.pagination.pages[$scope.pagination.pages.length] = $scope.gasStations
                }

                stations.get(radius, nextPage)
                    .then(function (results) {
                        $scope.gasStations = results
                        if (results.nextPage)
                            $scope.nextPage = results.nextPage
                    })
                    .catch(function (errorType) {
                        $scope.error = errorType
                        if (errorType == stations.notifications.geolocationError)
                            $scope.geolocationError = true
                        else if (errorType == stations.notifications.stationError)
                            $scope.gmapsError = true
                    })
                    .finally(
                        function () {
                            $scope.loading = false
                            $scope.$broadcast('scroll.refreshComplete')
                        },
                        function (notification) {
                            if (notification.type == stations.notifications.geolocationGet) {
                                $scope.geolocation = notification.value
                            } else if (notification.type == stations.notifications.stationGet) {
                                $scope.gasStations = notification.value
                            }
                        })
            }

            $scope.openUrl = function (url) {
                window.open(url, '_system')
            }

            //start trying to get stations
            $scope.updateStations()
        },
        GasStationViewCtrl: function ($scope, $state, $stateParams, crud) {
            $scope.station = crud.get('station', $stateParams.id)
        }
    }

    module.GasStationCtrl.$inject = ['$scope', '$http', 'crud', 'stations']
    module.GasStationViewCtrl.$inject = ['$scope', '$state', '$stateParams', 'crud']

    return module

})
