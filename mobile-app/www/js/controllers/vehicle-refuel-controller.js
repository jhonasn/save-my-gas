angular.module('save-my-gas')

.controller('vehicleRefuelController', function(
	$scope,
	$routeParams,
	vehicleRefuelService,
	vehicles
) {
	$scope.vehicles = vehicles
	$scope.vehicle = null

	$scope.delete = function(model) {
		model.vehicleId = $scope.vehicleId
		vehicleRefuelService.delete(model)
			.then(function() {
				$scope.collection = vehicleRefuelService.getCollection($scope.vehicleId)
			})
	}

	$scope.vehicleSelected = function(vehicle) {
		if (vehicle && vehicle.id) {
			$scope.vehicleId = vehicle.id
			$scope.collection = vehicleRefuelService.getCollection(vehicle.id)
		} else {
			$scope.vehicleId = $scope.collection = null
		}
	}

	if ($routeParams.vehicleId) {
		var vehicle = vehicles.filter(function(vehicle) {
			return vehicle.id === $routeParams.vehicleId
		})

		if (vehicle.length) {
			$scope.vehicle = vehicle[0]
			$scope.vehicleId = $routeParams.vehicleId
			$scope.vehicleSelected($scope.vehicle)
		}
	}
})

.controller('vehicleRefuelEditController', function(
	$scope,
	$routeParams,
	formatService,
	vehicleRefuelService,
	GasStation
) {
	$scope.model = {
		vehicleId: $routeParams.vehicleId
	}

	if ($routeParams.gasStationId) {
		GasStation.findById({
				id: $routeParams.gasStationId,
				filter: {
					fields: ['cityId', 'companyName', 'flag'],
					include: {
						relation: 'city',
						scope: {
							fields: ['id', 'name']
						}
					}
				}
			})
			.$promise
			.then(function(gasStation) {
				//autocomplete needs the id
				gasStation.id = $routeParams.gasStationId
				$scope.model.gasStationId = gasStation
				$scope.model.cityId = gasStation.city
			})
	}

	$scope.save = function(model) {
		vehicleRefuelService.save(model)
	}

	$scope.gasStationParamsMake = function(searchTerm) {
		return {
			filter: {
				where: {
					and: [{
						or: [{
							companyName: {
								like: searchTerm,
								options: 'i'
							}
						}, {
							flag: {
								like: searchTerm,
								options: 'i'
							}
						}]
					}, {
						cityId: $scope.model.cityId
					}]
				},
				limit: 10
			}
		}
	}

	$scope.formatCity = formatService.city
	$scope.formatGasStation = formatService.gasStation
})
