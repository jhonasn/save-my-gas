angular.module('save-my-gas')

.directive('locationSelector', function(
	$q,
	$interval,
	$http,
	authService,
	formatService,
	utilService,
	appConstants
) {
	return {
		restrict: 'E',
		replace: true,
		//transclude: true,
		templateUrl: SaveMyGas.rootRoute.getPath('/templates/location-selector.html'),
		require: 'ngModel',
		scope: {
			ngModel: '=',
			ngDisabled: '=',
			onChange: '=',
			hasMap: '=',
			map: '=',
			initGettingLocation: '='
		},
		link: function(scope, element, attributes, ngModelController) {
			var directionsService = new google.maps.DirectionsService()
			var locationField = element.find('#location-selector-field')
			scope.geolocationStatus = null
			scope.loading = false

			var initGettingLocation = true
			if(typeof scope.initGettingLocation === 'boolean') {
				initGettingLocation = scope.initGettingLocation
			}

			//fix label
			if (attributes.id) {
				locationField.attr('id', attributes.id)
				element.attr('id', attributes.id + '-container')
				var labelEl = angular.element('[for="' + attributes.id + '"]')
				if (labelEl.length > 0) {
					angular.element('#' + attributes.id)
						.after(labelEl)
				}
			}

			var changed = function () {
				if(scope.onChange) {
					scope.onChange(scope.ngModel)
				}
			}

			var expandViewportToFitPlace = function (map, place) {
				if (place.geometry.viewport) {
					map.fitBounds(place.geometry.viewport);
				} else {
					map.setCenter(place.geometry.location);
					map.setZoom(17);
				}
			}

			var initAutocomplete = function() {
				var locationAutocomplete = new google.maps.places.Autocomplete(locationField[0])
				locationField.data('autocomplete', locationAutocomplete)

				var removePlaceholder = function() { locationField.removeAttr('placeholder') }

				setTimeout(removePlaceholder, 200)
				setTimeout(removePlaceholder, 500)
				setTimeout(removePlaceholder, 1000)

				if(scope.map) {
					locationAutocomplete.bindTo('bounds', scope.map)
				}

				locationAutocomplete.addListener('place_changed', function() {
					scope.loading = false
					var place = locationAutocomplete.getPlace()
					if (!place.geometry) {
						Materialize.toast('O local selecionado não é válido')
						return
					}
					if(scope.map) {
						expandViewportToFitPlace(scope.map, place)
					}

					scope.geolocationStatus = 'gps_off'
					scope.ngModel = {
						geolocationStatus: scope.geolocationStatus,
						formattedAddress: place.formatted_address,
						placeId: place.place_id,
						info: place,
						geolocation: {
							latitude: place.geometry.location.lat(),
							longitude: place.geometry.location.lng()
						}
					}
					ngModelController.$setViewValue(scope.ngModel)
					changed()
				})
			}

			scope.getGeolocation = function() {
				//test cl: -25.4561845,-49.5620424
				// scope.geolocation = {
				// 	latitude: -25.4561845,
				// 	longitude: -49.5620424
				// }
				scope.loading = true
				scope.geolocationStatus = 'gps_not_fixed'

				if (navigator.geolocation) {
					var positionSuccess = function(pos) {
						if(initGettingLocation && scope.hasMap) {
							var geolocation = utilService.toGeoPoint(pos.coords)
							scope.map.setCenter(geolocation)
							scope.map.setZoom(18)

							var marker = new google.maps.Marker({
								position: geolocation,
								map: scope.map,
								draggable: false,
								title: scope.$parent.cordova ? 'Você está aqui!' : 'Você está em algum lugar perto daqui...'
							})

							initGettingLocation = false
						}
						getGeolocationAddress(pos.coords)
							.then(function() {
								scope.loading = false
								scope.ngModel.geolocationStatus = scope.geolocationStatus = 'gps_fixed'
								changed()
							})
					}
					var positionError = function(err) {
						scope.loading = false
						Materialize.toast('Não foi possível obter sua localização')
					}
					navigator.geolocation.getCurrentPosition(positionSuccess, positionError)
				} else {
					Materialize.toast('Não foi possível obter sua localização porque seu navegador não suporta essa funcionalidade')
				}
			}

			var getGeolocationAddress = function(geolocation) {
				var defered = $q.defer()
				if (geolocation && geolocation.latitude && geolocation.longitude) {
					authService.setAnonymousRequest()
					$http.get(
							appConstants.googleGeoCodeApi, {
								params: {
									key: appConstants.googleWebClientKey,
									latlng: formatService.toGeoString(geolocation)
								}
							}
						)
						.then(function(res) {
							if (res && res.data && res.data.status === 'OK') {
								scope.ngModel = {
									// geolocationStatus: scope.geolocationStatus,
									formattedAddress: res.data.results[0].formatted_address,
									placeId: res.data.results[0].place_id,
									info: res.data.results[0],
									geolocation: geolocation
								}

								defered.resolve()
							} else {
								Materialize.toast('Não foi possível recuperar o endereço da sua localização')
								defered.reject()
							}
						})
				} else {
					Materialize.toast('Houve um problema ao buscar sua localização')
					defered.reject()
				}

				return defered.promise
			}

			scope.clear = function() {
				scope.geolocationStatus = 'gps_off'
				ngModelController.$setViewValue(null)
				changed()
			}

			var init = function () {
				initAutocomplete()
				if(initGettingLocation) {
					scope.getGeolocation()
				}
			}

			scope.clear()

			if(scope.hasMap) {
				var promise = $interval(function() {
					if(scope.map) {
						init()
						$interval.cancel(promise)
					}
				}, 300)
			} else {
				init()
			}

		}
	}
})
