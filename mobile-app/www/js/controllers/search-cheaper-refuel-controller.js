angular.module('save-my-gas')

.controller('SearchCheaperRefuelController', function(
	$scope,
	$q,
	orderByFilter,
	GasStation,
	FuelPrice,
	simulatorService,
	vehicleService,
	vehicleRefuelService,
	geolocationService,
	formatService,
	utilService,
	vehicles
) {
	$scope.vehicles = vehicles
	$scope.refuelMoneyValue = null
	$scope.refuelLiterValue = null
	$scope.unit = 'money'
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
							getNearGasStations()
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

	$scope.originChanged = getNearGasStations

	$scope.radiusChanged = function() {
		getNearGasStations()
	}

	var getNearGasStations = function() {
		var geolocation = $scope.origin.geolocation

		if (!geolocation ||
			(!geolocation.latitude && !geolocation.longitude) ||
			!selectedVehicle
		) {
			return
		}

		var fuelTypeIds = [selectedVehicle.fuelTypeId]

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
				var fuelPricePromises = []
				collection.forEach(function(gasStation) {
					var promise = FuelPrice.find({
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
					fuelPricePromises.push(promise)
				})

				$q.all(fuelPricePromises)
					.then(gasStationsCalulateEconomy)
			})
	}

	var gasStationsCalulateEconomy = function() {
		var collection = orderByFilter($scope.collection,
			$scope.unit === 'money' ? 'litersAvailableAfterRefuel' : '-fuelCostAfterRefuel')
		var gasStationLessEconomy = collection[0]

		$scope.collection.forEach(function(gs) {
			gs.economyLitersRefuel = gs.litersAvailableAfterRefuel - gasStationLessEconomy.litersAvailableAfterRefuel
			gs.economyLitersRefuelReturn = gs.litersAvailableAfterRefuelReturn - gasStationLessEconomy.litersAvailableAfterRefuelReturn

			gs.economyDistanceRefuel = gs.distanceAvailableAfterRefuel - gasStationLessEconomy.distanceAvailableAfterRefuel
			gs.economyDistanceRefuelReturn = gs.distanceAvailableAfterRefuelReturn - gasStationLessEconomy.distanceAvailableAfterRefuelReturn

			if ($scope.unit === 'money') {
				gs.economyRefuel = gs.economyDistanceRefuel * gs.currentPrice
				gs.economyRefuelReturn = gs.economyDistanceRefuelReturn * gs.currentPrice
					//unit === 'liter'
			} else {
				gs.economyRefuel = gasStationLessEconomy.fuelCostAfterRefuel - gs.fuelCostAfterRefuel
				gs.economyRefuelReturn = gasStationLessEconomy.fuelCostAfterRefuelReturn - gs.fuelCostAfterRefuelReturn
			}
		})
	}

	var gasStattionRefuelValueCalculations = function(gasStation) {
		if ($scope.unit === 'money') {
			gasStation.fuelBought = $scope.refuelMoneyValue / gasStation.currentPrice

			gasStation.litersAvailableAfterRefuel = gasStation.fuelBought - gasStation.liters
			gasStation.litersAvailableAfterRefuelReturn = gasStation.fuelBought - (gasStation.liters * 2)
				//unit === 'liter'
		} else {
			gasStation.fuelCost = $scope.refuelLiterValue * gasStation.currentPrice

			gasStation.litersAvailableAfterRefuel = $scope.refuelLiterValue - gasStation.liters
			gasStation.litersAvailableAfterRefuelReturn = $scope.refuelLiterValue - (gasStation.liters * 2)

			gasStation.fuelCostAfterRefuel = gasStation.litersAvailableAfterRefuel * gasStation.currentPrice
			gasStation.fuelCostAfterRefuelReturn = gasStation.litersAvailableAfterRefuel * gasStation.currentPrice
		}

		//distance need to be in meters for distance filter
		gasStation.distanceAvailableAfterRefuel = (
			gasStation.litersAvailableAfterRefuel * selectedVehicle.consumption
		) * 1000
		gasStation.distanceAvailableAfterRefuelReturn = (
			gasStation.litersAvailableAfterRefuelReturn * selectedVehicle.consumption
		) * 1000
	}

	var gasStationDoCalculations = function(gasStation) {
		gasStation.currentPrice = null
		if (gasStation.fuelPrices && gasStation.fuelPrices.length) {
			gasStation.currentPrice = gasStation.fuelPrices[0].sale
		}

		gasStation.distance = geolocationService.distanceBetween(
			utilService.toGeoPoint($scope.origin.geolocation),
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

		if ($scope.refuelMoneyValue) {
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
			gasStationsCalulateEconomy()
		}
	}

	$scope.openGPSRoute = function(origin, destination) {
		origin = formatService.toGeoString(origin)
		destination = formatService.toGeoString(destination)
		if($scope.cordova) {
			launchnavigator.navigate(destination, {
				start: origin
			})
		} else {
			window.open(
				(
					'https://maps.google.com/maps?saddr=' + origin +
					'&daddr=' + destination +
					'&dirflg=d'
				),
				'_blank')
		}
	}

	$scope.detail = function(gasStation) {
		// alert('deveria mostrar detalhes do posto ' + formatService.gasStation(gasStation))
	}

	// $scope.refuel = function(gasStation) {
	// 	alert('deveria mostrar tela de abastecimento o posto ' + formatService.gasStation(gasStation) + ' selecionado')
	// }
})
