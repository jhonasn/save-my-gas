angular.module('save-my-gas')

.controller('gasStationController', function(
	$scope,
	gasStationService,
	fuelTypes
) {
	//filters
	$scope.origin = null
	$scope.radius = 10
	$scope.name = null
	$scope.fuelTypes = fuelTypes

	$scope.collection = []

	var filter = function() {
		$scope.collection = null

		var fuelTypes = $scope.fuelTypes.filter(function (ft) {
			return ft.selected
		})
		// if no fuelTypes selected bring it all
		if(!fuelTypes.length) {
			fuelTypes = $scope.fuelTypes
		}

		var geolocation = null
		if($scope.origin) {
			geolocation = $scope.origin.geolocation
		}

		var promise = gasStationService.filterGasStation(
			geolocation,
			$scope.radius,
			fuelTypes,
			$scope.name,
			10
		)

		if(promise && promise.then) {
			promise.then(function(gasStations) {
				$scope.collection = gasStations
			})
		}
	}

	$scope.originChanged =
		$scope.radiusChanged =
		$scope.fuelTypeChanged =
		$scope.nameChanged = filter
})

.controller('gasStationEditController', function(
	$scope,
	gasStationService
) {})
