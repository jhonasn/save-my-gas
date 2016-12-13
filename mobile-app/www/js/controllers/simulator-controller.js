angular.module('save-my-gas')

.controller('simulatorController',
	function(
		$scope,
		$q,
		authService,
		Vehicle,
		vehicles
	) {
		$scope.title = "simulator controller"
		$scope.geolocation = null
		$scope.map = null
		$scope.vehicleId = null
		$scope.vehicles = vehicles

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

		var verifyRefuels = function(vehicleId) {
			Vehicle.VehicleRefuels.count({
				filter: {
					where: {
						vehicleId: vehicleId
					}
				}
			})
		}

		var initMap = function(coords) {
			var mapDiv = document.getElementById('map')

			var options = {
				zoom: 8,
				mapTypeId: google.maps.MapTypeId.ROADMAP
			}

			if (coords && coords.latitude && coords.longitude) {
				options.center = new google.maps.LatLng(coords.latitude, coords.longitude)
			}

			$scope.map = new google.maps.Map(mapDiv, options)
		}

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
