angular.module('save-my-gas')

.controller('vehicleRefuelController',
	function(
		$scope,
		VehicleRefuel,
		vehicles
	) {
		vehicles.forEach(function (vehicle) {
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
			$scope.vehicleId = vehicle.id
			$scope.collection = VehicleRefuel.find({
				id: $scope.vehicleId,
				filter: {
					include: { gasStation: ['city'] }
				}
			})
		}

		$scope.formatGasStationName = function(gasStation) {

		}

		$scope.formatCity = function(city) {
			return utilService.toTitleCase(city.name)
		}

		$scope.formatGasStation = function(gasStation) {
			return utilService.toTitleCase(
				gasStation.flag ?
				gasStation.flag + ' - ' + gasStation.companyName :
				gasStation.companyName
			)
		}
	})

.controller('vehicleEditController',
	function(
		$scope,
		utilService,
		VehicleRefuel
	) {
		$scope.model = model

		$scope.save = function(model) {

		}

		$scope.vehicleRefuelGasStationParamsMake = function(searchTerm) {
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
	})
