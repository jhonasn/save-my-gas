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
		.then(function () {
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
			var mapDiv = document.getElementById('map')

			var options = {
				zoom: 15,
				mapTypeId: google.maps.MapTypeId.ROADMAP
			}

			if (coords && coords.latitude && coords.longitude) {
				options.center = new google.maps.LatLng(coords.latitude, coords.longitude)
			}

			$scope.map = new google.maps.Map(mapDiv, options)

			var marker = new google.maps.Marker({
				position: options.center,
				map: $scope.map,
				draggable: true,
				title: $scope.cordova ? 'Você está aqui!' : 'Você está em algum lugar perto daqui...'
			})
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
