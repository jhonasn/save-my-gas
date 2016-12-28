angular.module('save-my-gas')

.controller('gasStationController',
	function(
		$scope,
		GasStation,
		simulatorService,
		vehicleService,
		vehicleRefuelService,
		geolocationService,
		vehicles
	) {
		$scope.title = 'busca de preços de postoso de combustível'

		$scope.vehicles = vehicles
		var lastRefuelValue = null
		var selectedVehicle = null
		var radius = 50

		simulatorService.verifyVehiclesRefuels()

		$scope.vehicleSelected = function(vehicle) {
			if (vehicle && vehicle.id) {
				$scope.vehicleId = vehicle.id
				selectedVehicle = simulatorService.getVehicleById($scope.vehicleId)
				simulatorService.verifyVehicleRefuels($scope.vehicleId)
					.then(function(count) {
						simulatorService.getLastRefuelValue($scope.vehicleId)
							.then(function(lastRefuelVal) {
								lastRefuelValue = lastRefuelVal
								initGeolocation()
							})
							.catch(function() {
								$scope.vehicleId = null
								selectedVehicle = null
							})
					})
			} else {
				$scope.vehicleId = null
				selectedVehicle = null
			}
		}

		var initGeolocation = function() {
			//test cl: -25.4561845,-49.5620424
			//$scope.geolocation = { lat: -25.4561845, lng: -49.5620424, latitude: -25.4561845, longitude: -49.5620424 }
			if (navigator.geolocation) {
				var positionSuccess = function(pos) {
					$scope.geolocation = pos.coords

					$scope.geolocation.lat = pos.coords.latitude
					$scope.geolocation.lng = pos.coords.longitude

					// initMap($scope.geolocation)
					getNearGasStations($scope.geolocation)
				}
				var positionError = function(err) {
					Materialize.toast('Não foi possível obter sua localização')
				}
				navigator.geolocation.getCurrentPosition(positionSuccess, positionError)
			} else {
				Materialize.toast('Não foi possível obter sua localização porque seu navegador não suporta essa funcionalidade')
					// initMap()
			}
		}

		var getNearGasStations = function(geolocation) {
			$scope.collection = GasStation.find({
				filter: {
					where: {
						geolocation: {
							near: {
								lat: geolocation.latitude,
								lng: geolocation.longitude
							},
							maxDistance: radius,
							unit: 'kilometers'
						}
					},
					limit: 10,
					include: {
						relation: 'fuelPrices',
						scope: {
							order: 'date DESC',
							limit: 1
						},
						relation: 'city'
					}
				}
			})

			$scope.collection
				.$promise
				.then(function(collection) {
					collection.forEach(function(gasStation) {
						gasStation.currentPrice = null
						if (gasStation.fuelPrices && gasStation.fuelPrices.length) {
							gasStation.currentPrice = gasStation.fuelPrices[0].sale
						}

						gasStation.distance = geolocationService.distanceBetween(
							$scope.geolocation,
							gasStation.geolocation
						)

						if (gasStation.distance < 1) {
							gasStation.distance = gasStation.distance.toFixed(3).substr(2) + ' m'
						} else {
							gasStation.distance = gasStation.distance.toFixed(1) + ' km'
						}

						//due calculation
						gasStation.arriveValue = null
					})
				})
		}

		$scope.formatCity = vehicleRefuelService.formatCity
		$scope.formatGasStation = vehicleRefuelService.formatGasStation
	})

.controller('gasStationViewController',
	function(
		$scope
	) {})
