angular.module('save-my-gas')

.controller('simulatorController',
	function(
		$scope,
		$q,
		authService,
		Vehicle,
		VehicleRefuel,
		vehicles
	) {
		$scope.title = "simulator controller"
		$scope.geolocation = null
		$scope.map = null
		$scope.vehicleId = null

		$scope.vehicleSelected = function(vehicle) {
			if (vehicle && vehicle.id) {
				$scope.vehicleId = vehicle.id
				$scope.vehicleRefuels = VehicleRefuel.count({
					filter: {
						where: {
							vehicleId: $scope.vehicleId
						}
					}
				})
			} else {
				$scope.vehicleId = $scope.collection = null
			}
		}

		var initMap = function(coords) {
			var mapDiv = document.getElementById('map')

			// google.maps.event.addDomListener(window, 'load', function() {
				var options = {
					zoom: 8,
					mapTypeId: google.maps.MapTypeId.ROADMAP
				}

				if(coords && coords.latitude && coords.longitude) {
					options.center = new google.maps.LatLng(coords.latitude, coords.longitude)
				}

				$scope.map = new google.maps.Map(mapDiv, options)
			// })
		}
		//
		// var verifyRefuels = function(vehicleId) {
		// 	vehicleRefuel.count({
		// 		filter: {
		// 			where: {
		// 				vehicleId: vehicleId
		// 			}
		// 		}
		// 	})
		// }

		// var verifyUserVehiclesRefuels = function() {
		// 	var _user = authService.getUser()
		// 	var _userId = authService.getUser().userId
		//
		// 	var collection = User.vehicles({
		// 		id: _userId,
		// 		filter: {
		// 			include: [
		// 				'vehicleBrand',
		// 				'vehicleModel',
		// 				'vehicleType',
		// 				'vehicleEngine',
		// 				'fuelType'
		// 			]
		// 		}
		// 	})
		//
		// 	collection.$promise.then(function(collection) {
		// 		collection.forEach(function(m) {
		// 			m.photo = m.photo || {}
		// 			m.photo.thumb = m.photo.thumb || SaveMyGas.rootRoute.getPath('/img/default-car.png')
		// 			m.nickName = m.nickName || '\xa0'
		// 			m.img = vehicleService.getVehiclePhotoPath(m)
		// 		})
		// 	})
		//
		// }

		if (navigator.geolocation) {
			var positionSuccess = function(pos) {
				$scope.geolocation = pos.coords
				// $scope.geolocation = {}
				// $scope.geolocation.lat = pos.coords.latitude
				// $scope.geolocation.lng = pos.coords.longitude

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

	})
