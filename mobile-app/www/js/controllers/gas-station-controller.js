angular.module('save-my-gas')

.controller('SearchCheaperRefuelController', function(
	$scope,
	GasStation,
	FuelPrice,
	simulatorService,
	vehicleService,
	vehicleRefuelService,
	geolocationService,
	formatService,
	vehicles
) {
	$scope.vehicles = vehicles
	$scope.refuelValue = null
	var lastRefuelValue = null
	var selectedVehicle = null
	$scope.radius = 50

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
				getNearGasStations($scope.geolocation, [selectedVehicle.fuelTypeId])
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

	var getNearGasStations = function(geolocation, fuelTypeIds) {
		var fuelTypeIdsObj = fuelTypeIds.map(function(ftId) {
			return {
				fuelTypeId: ftId
			}
		})

		//get gas stations
		$scope.collection = GasStation.find({
			filter: {
				where: {
					geolocation: {
						near: {
							lat: geolocation.latitude,
							lng: geolocation.longitude
						},
						maxDistance: $scope.radius,
						unit: 'kilometers'
					},
					hasPrices: true,
					fuelTypeIds: {
						inq: fuelTypeIds
					}
				},
				limit: 10,
				fields: [
					'id',
					'companyName',
					'flag',
					'geolocation',
					'cityId'
				],
				include: {
					relation: 'city',
					scope: {
						fields: ['id', 'name']
					}
				}
			}
		})

		$scope.collection
			.$promise
			.then(function(collection) {
				collection.forEach(function(gasStation) {
					FuelPrice.find({
							filter: {
								order: 'date DESC',
								limit: 1,
								fields: ['sale', 'gasStationId'],
								where: {
									gasStationId: gasStation.id,
									// or: fuelTypeIdsObj
									fuelTypeId: fuelTypeIds[0]
								}
							}
						})
						.$promise
						.then(function(fuelPrice) {
							gasStation.fuelPrices = fuelPrice
							gasStationDoCalculations(gasStation)
						})
				})
			})
	}

	var gasStattionRefuelValueCalculations = function(gasStation) {
		gasStation.fuelBought = $scope.refuelValue / gasStation.currentPrice

		//distance need to be in meters for distance filter
		gasStation.distanceAvailableAfterRefuel = (
			(gasStation.fuelBought - gasStation.liters) * selectedVehicle.consumption
		) * 1000
		gasStation.distanceAvailableAfterRefuelReturn = (
			(gasStation.fuelBought - (gasStation.liters * 2)) * selectedVehicle.consumption
		) * 1000
	}

	var gasStationDoCalculations = function(gasStation) {
		gasStation.currentPrice = null
		if (gasStation.fuelPrices && gasStation.fuelPrices.length) {
			gasStation.currentPrice = gasStation.fuelPrices[0].sale
		}

		gasStation.distance = geolocationService.distanceBetween(
			$scope.geolocation,
			gasStation.geolocation
		)

		//distance in meters like gmaps
		gasStation.distance *= 1000

		gasStation.liters = gasStation.distance / (selectedVehicle.consumption * 1000)

		//due calculation
		gasStation.arriveValue = gasStation.liters * lastRefuelValue

		//using 60 km/h as default car speed
		gasStation.time = (gasStation.distance / 1000) / 60
			//to ms
		gasStation.time = (gasStation.time * 60 * 60 * 1000)

		if ($scope.refuelValue) {
			gasStattionRefuelValueCalculations(gasStation)
		}
	}

	$scope.refuelValueChanged = function() {
		if (
			$scope.collection &&
			$scope.collection.$resolved &&
			$scope.collection.length &&
			selectedVehicle
		) {
			//redo gas stations fuelBought calculation
			$scope.collection.forEach(function(gs) {
				gasStattionRefuelValueCalculations(gs)
			})
		}
	}

	$scope.radiusChanged = function() {
		getNearGasStations($scope.geolocation, [selectedVehicle.fuelTypeId])
		alert('deveria mostrar buscar postos no raio selecionado (' + $scope.radius + ' km)')
	}

	$scope.detail = function(gasStation) {
		alert('deveria mostrar detalhes do posto ' + $scope.formatGasStation(gasStation))
	}

	$scope.refuel = function(gasStation) {
		alert('deveria mostrar tela de abastecimento o posto ' + $scope.formatGasStation(gasStation) + ' selecionado')
	}
})

.controller('gasStationViewController', function(
	$scope
) {})
