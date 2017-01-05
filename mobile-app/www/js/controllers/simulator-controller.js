angular.module('save-my-gas')

.controller('simulatorController', function(
	$scope,
	$filter,
	simulatorService,
	vehicleService,
	vehicles
) {
	$scope.title = "simulator controller"
	$scope.geolocation = null
	$scope.map = null
	$scope.vehicleId = null
	$scope.vehicles = vehicles
	$scope.model = {}
	var selectedVehicle = null
	var lastRefuelValue = null

	var originPlaceId = null
	var destinationPlaceId = null

	$scope.clearOrigin = function() {
		originPlaceId = null
		$scope.model.origin = null
	}

	$scope.clearDestination = function() {
		destinationPlaceId = null
		$scope.model.destination = null
	}

	simulatorService.verifyVehiclesRefuels()
		.then(function() {
			initGeolocation()
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

	var initMap = function(coords) {
		//map
		var mapDiv = document.getElementById('map')

		var options = {
			zoom: 15,
			mapTypeId: google.maps.MapTypeId.ROADMAP
		}

		var coordsOk = coords && coords.latitude && coords.longitude
		if (coordsOk) {
			options.center = new google.maps.LatLng(coords.latitude, coords.longitude)
		} else {
			options.center = new google.maps.LatLng(-23.0750829, -48.5286026)
			options.zoom = 7
		}

		var map = $scope.map = new google.maps.Map(mapDiv, options)

		var marker = new google.maps.Marker({
			position: options.center,
			map: $scope.map,
			draggable: true,
			title: $scope.cordova ? 'Você está aqui!' : 'Você está em algum lugar perto daqui...'
		})

		//auto complete
		var inputs = angular.element('#map-inputs')
			// map.controls[google.maps.ControlPosition.TOP_LEFT].push(inputs[0])

		var originField = inputs.find('#origin-field')
		var destinationField = inputs.find('#destination-field')

		var travelMode = google.maps.TravelMode.DRIVING //TRANSIT

		var directionsService = new google.maps.DirectionsService
		var directionsDisplay = new google.maps.DirectionsRenderer
		directionsDisplay.setMap(map)

		var originAutocomplete = new google.maps.places.Autocomplete(originField[0])
		var destinationAutocomplete = new google.maps.places.Autocomplete(destinationField[0])

		originAutocomplete.bindTo('bounds', map)
		destinationAutocomplete.bindTo('bounds', map)

		function expandViewportToFitPlace(map, place) {
			if (place.geometry.viewport) {
				map.fitBounds(place.geometry.viewport);
			} else {
				map.setCenter(place.geometry.location);
				map.setZoom(17);
			}
		}

		originAutocomplete.addListener('place_changed', function() {
			var place = originAutocomplete.getPlace()
			if (!place.geometry) {
				Materialize.toast('O local de origem selecionado não é válido')
				return
			}
			expandViewportToFitPlace(map, place)

			originPlaceId = place.place_id
			route(originPlaceId, destinationPlaceId, travelMode,
				directionsService, directionsDisplay)
		})

		destinationAutocomplete.addListener('place_changed', function() {
			var place = destinationAutocomplete.getPlace()
			if (!place.geometry) {
				Materialize.toast('O local de destino selecionado não é válido')
				return
			}
			expandViewportToFitPlace(map, place)

			destinationPlaceId = place.place_id
			route(originPlaceId, destinationPlaceId, travelMode,
				directionsService, directionsDisplay)
		})

		var route = function(originPlaceId, destinationPlaceId, travelMode,
			directionsService, directionsDisplay) {
			if (!originPlaceId || !destinationPlaceId) {
				return;
			}
			directionsService.route({
				origin: {
					'placeId': originPlaceId
				},
				destination: {
					'placeId': destinationPlaceId
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
						infoWindow.open(map)
					} else {
						Materialize.toast('Não foi possível recuperar a distancia da rota')
					}
				} else {
					Materialize.toast('Ocorreu um problema com o gooogle ao processar seu pedido')
					console.error(status, response)
				}
			});
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

})
