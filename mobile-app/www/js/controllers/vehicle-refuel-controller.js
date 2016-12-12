angular.module('save-my-gas')

.controller('vehicleRefuelController',
	function(
		$scope,
		VehicleRefuel,
		vehicleRefuelService,
		vehicles
	) {
		vehicles.forEach(function(vehicle) {
			vehicle.name = vehicle.nickName.trim() || vehicle.vehicleModel.name
		})

		$scope.vehicles = vehicles
			// $scope.vehicleId = null

		$scope.delete = function(id) {
			VehicleRefuel.deleteById(id)
				.then(function() {
					$scope.collection = vehicleRefuelService.getCollection()
				})
		}

		$scope.vehicleSelected = function(vehicle) {
			if (vehicle && vehicle.id) {
				$scope.vehicleId = vehicle.id
				$scope.collection = VehicleRefuel.find({
					filter: {
						where: {
							vehicleId: $scope.vehicleId
						},
						include: {
							gasStation: ['city']
						}
					}
				})
			} else {
				$scope.vehicleId = $scope.collection = null
			}
		}

		$scope.formatCity = vehicleRefuelService.formatCity
		$scope.formatGasStation = vehicleRefuelService.formatGasStation
	})

.controller('vehicleRefuelEditController',
	function(
		$scope,
		$routeParams,
		utilService,
		vehicleRefuelService
	) {
		$scope.model = {
			vehicleId: $routeParams.vehicleId
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

		$scope.formatCity = vehicleRefuelService.formatCity
		$scope.formatGasStation = vehicleRefuelService.formatGasStation
	})
