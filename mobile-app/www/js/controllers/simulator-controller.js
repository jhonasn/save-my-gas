angular.module('save-my-gas')

.controller('simulatorController',
	function(
		$scope,
		simulatorService,
		vehicles
	) {
		$scope.title = "simulator controller"
		$scope.geolocation = null
		$scope.map = null
		$scope.vehicleId = null
		$scope.vehicles = vehicles

		simulatorService.verifyVehiclesRefuels()
			.then(function() {
				initGeolocation()
			})

		$scope.vehicleSelected = function(vehicle) {
			if (vehicle && vehicle.id) {
				$scope.vehicleId = vehicle.id
				simulatorService.verifyVehicleRefuels($scope.vehicleId)
			} else {
				$scope.vehicleId = null
			}
		}

		var initMap = function(coords) {
			//map
			var mapDiv = document.getElementById('map')

			var options = {
				zoom: 15,
				mapTypeId: google.maps.MapTypeId.ROADMAP
			}

			if (coords && coords.latitude && coords.longitude) {
				options.center = new google.maps.LatLng(coords.latitude, coords.longitude)
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
			map.controls[google.maps.ControlPosition.TOP_LEFT].push(inputs[0])

			var originField = inputs.find('#origin-field')
			var destinationField = inputs.find('#destination-field')

			var originPlaceId = null
			var destinationPlaceId = null
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

					initMap($scope.geolocation)
				}
				var positionError = function(err) {
					Materialize.toast('Não foi possível obter sua localização')
				}
				navigator.geolocation.getCurrentPosition(positionSuccess, positionError)
			} else {
				Materialize.toast('Não foi possível obter sua localização porque seu navegador não suporta essa funcionalidade')
				initMap()
			}
		}

	})
