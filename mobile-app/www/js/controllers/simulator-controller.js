angular.module('save-my-gas')

.controller('simulatorController', function(
	$scope,
	$filter,
	simulatorService,
	vehicleService,
	vehicles
) {
	$scope.title = "simulator controller"
	// $scope.geolocation = null
	$scope.vehicleId = null
	$scope.vehicles = vehicles
	$scope.model = {}
	var selectedVehicle = null
	var lastRefuelValue = null

	$scope.map = null
	var travelMode = google.maps.TravelMode.DRIVING //TRANSIT
	var directionsService = new google.maps.DirectionsService()
	var directionsDisplay = new google.maps.DirectionsRenderer()

	simulatorService.verifyVehiclesRefuels()
		.then(function() {
			initMap()
		})

	$scope.vehicleSelected = function(vehicle) {
		if (vehicle && vehicle.id) {
			$scope.vehicleId = vehicle.id
			selectedVehicle = simulatorService.getVehicleById($scope.vehicleId)
			simulatorService.verifyVehicleRefuels($scope.vehicleId)
				.then(function(count) {
					simulatorService.getLastRefuelValue($scope.vehicleId)
						.then(function(lastRefuelVal) {
							lastRefuelValue = lastRefuelVal
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

	var initMap = function() {
		//map
		var mapDiv = document.getElementById('map')

		var options = {
			zoom: 15,
			mapTypeId: google.maps.MapTypeId.ROADMAP,
			center: new google.maps.LatLng(-23.0750829, -48.5286026),
			zoom: 7
		}

		$scope.map = $scope.map = new google.maps.Map(mapDiv, options)

		directionsDisplay.setMap($scope.map)
	}

	$scope.traceRoute = function() {
		if (
			!$scope.model.origin ||
			!$scope.model.destination ||
			!$scope.model.origin.placeId ||
			!$scope.model.destination.placeId
		) {
			return;
		}
		directionsService.route({
			origin: {
				'placeId': $scope.model.origin.placeId
			},
			destination: {
				'placeId': $scope.model.destination.placeId
			},
			travelMode: travelMode
		}, function(response, status) {
			if (status === google.maps.DirectionsStatus.OK) {
				directionsDisplay.setDirections(response);
				//get distance
				if (
					response.routes &&
					response.routes.length &&
					response.routes[0].legs &&
					response.routes[0].legs.length &&
					response.routes[0].legs[0].distance &&
					response.routes[0].legs[0].distance.value
				) {
					//make route calculation
					var kms = response.routes[0].legs[0].distance.text
					var time = response.routes[0].legs[0].duration.text

					var distance = response.routes[0].legs[0].distance.value

					var liters = distance / (selectedVehicle.consumption * 1000)

					var cost = liters * lastRefuelValue

					liters = liters.toFixed(3) + ' L'
					cost = $filter('currency')(cost, 'R$ ', 2)

					var infoWindow = new google.maps.InfoWindow();
					infoWindow.setContent(
						kms + '<br>' +
						time + '<br>' +
						cost + '<br>' +
						liters
					)

					//put the infoWindow into the end
					var steps = response.routes[0].legs[0].steps
					var step = Math.ceil(steps.length / 2) || 1

					infoWindow.setPosition(steps[step].end_location)
					infoWindow.open($scope.map)
				} else {
					Materialize.toast('Não foi possível recuperar a distancia da rota')
				}
			} else {
				Materialize.toast('Ocorreu um problema com o gooogle ao processar seu pedido')
				console.error(status, response)
			}
		});
	}
})
