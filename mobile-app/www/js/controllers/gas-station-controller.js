angular.module('save-my-gas')
.controller('GasStationController',
function(
	$scope,
	$http,
	$ionicPopup,
	$state,
	$ionicScrollDelegate,
	crud,
	stations
) {
	if (navigator.network)
		$scope.connected = navigator.network.connection.type != Connection.NONE
	else
		$scope.connected = navigator.onLine

	$scope.gasStations = []
	$scope.geolocation = null
	$scope.radius = 5000

	var lastScroll = 0

	//fake data for moments with no internet connection
	// for (var i = 0; i < 50; i++) {
	//     $scope.gasStations.push({})
	// }

	$scope.vehicle = crud.getByProp('vehicle', 'selected', true)

	//constantly refresh connected variable
	document.addEventListener("online", function() {
		$scope.connected = true
		console.log('online')
	}, false)
	document.addEventListener("offline", function() {
		$scope.connected = false
		console.log('offline')
	}, false)

	var getStationsError = function(errorType) {
		$scope.error = errorType
		if (errorType == stations.notifications.geolocationError)
			$scope.geolocationError = true
		else if (errorType == stations.notifications.stationError)
			$scope.gmapsError = true
	}

	var getStationsNotification = function(notification) {
		if (notification.type == stations.notifications.geolocationGet) {
			if ($scope.geolocation && $scope.geolocation.coords) {
				$scope.newGeolocation = !($scope.geolocation.coords.latitude == notification.value.coords.latitude && $scope.geolocation.coords.longitude == notification.value.coords.longitude)
			}
			$scope.geolocation = notification.value
		}
	}

	var getStationsStart = function() {
		$scope.loading = true
		$scope.geolocationError = false
		$scope.gmapsError = false
	}

	$scope.updateStations = function(radius) {
		getStationsStart()

		stations.get(radius, $scope.vehicle)
			.then(function(results) {
				$scope.gasStations = results
			})
			.catch(getStationsError)
			.finally(
				function() {
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

		if ($ionicScrollDelegate.getScrollPosition().top == lastScroll) {
			$scope.$broadcast('scroll.infiniteScrollComplete')
			return
		} else {
			lastScroll = $ionicScrollDelegate.getScrollPosition().top
		}

		getStationsStart()

		stations.get(radius, $scope.vehicle, gasStations.nextPage)
			.then(function(results) {
				if ($scope.newGeolocation) {
					$scope.gasStations = results
				} else {
					$scope.gasStations = $scope.gasStations.concat(results)
					$scope.gasStations.nextPage = results.nextPage
				}
			})
			.catch(getStationsError)
			.finally(
				function() {
					$scope.loading = false
					$scope.$broadcast('scroll.infiniteScrollComplete')
				},
				getStationsNotification
			)
	}

	$scope.openUrl = function(url) {
		window.open(url, '_system')
	}

	if ($scope.vehicle)
		$scope.updateStations()
	else { //ask user to register a vehicle
		$ionicPopup.confirm({
				title: 'Please register a vehicle',
				template: 'We need your vehicle information to show how much resources your trip will spend, althought you can view nearer gas stations with few information'
			})
			.then(function(yes) {
				if (yes) {
					$state.go('app.vehicle-edit')
				} else {
					$scope.updateStations()
				}
			})
	}
})

.controller('GasStationViewController',
function(
	$scope,
	$state,
	$stateParams,
	crud
) {
	$scope.station = crud.get('station', $stateParams.id)
})
