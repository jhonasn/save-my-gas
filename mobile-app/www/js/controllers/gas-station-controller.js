angular.module('save-my-gas')

.controller('gasStationController', function(
	$scope,
	gasStationService
) {
	$scope.rating = 4
})

.controller('gasStationEditController', function(
	$scope,
	gasStationService
) {})
