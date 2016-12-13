angular.module('save-my-gas')

.controller('gasStationController',
function(
	$scope,
	GasStation,
	simulatorService,
	vehicleService,
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
		if (navigator.geolocation) {
			var positionSuccess = function(pos) {
				$scope.geolocation = pos.coords

				// initMap($scope.geolocation)
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
				where: {
					geolocation: {
						near: geolocation,
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

		$scope.collection.then(function(collection) {
			collection.forEatch(function(gasStation) {
				gasStation.curretPrice = null
				if(gasStation.fuelPrices && gasStation.fuelPrices.length) {
					gasStation.curretPrice = gasStation.fuelPrices[0].sale
				}

				//calculation
				gasStation.arriveValue = null
			})
		})
}
})

.controller('gasStationViewController',
	function(
		$scope
	) {})
