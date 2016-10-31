angular.module('save-my-gas')
	.controller('vehicleController',
		function(
			$scope,
			Vehicle,
			vehicleService,
			collection
		) {
			$scope.collection = collection

			$scope.delete = function(id) {
				var model = Vehicle.deleteById({id: id})
				model.$promise.then(function() {
						Materialize.toast('Veículo deletado')
						$scope.collection = vehicleService.getCollection()
					})
					.catch(function(err) {
						Materialize.toast('Não foi possível deletar o veículo')
					})
			}
		})

.controller('vehicleCreateController',
	function(
		$scope,
		$location,
		vehicleService,
		Vehicle,
		model
	) {
		model.photo = { photo: SaveMyGas.rootRoute.getPath('/img/default-car.png') }
		$scope.model = model
		//vehicleService.getVehicleType
		$scope.getVehicleType = ['teste 1', 'oi', 'hello', 'olá', 'bye', 'beijos']
		$scope.anoAtual = (new Date()).getFullYear()

		$scope.save = function(model) {
			$scope.model = Vehicle.create(model)
			$scope.model.$promise.then(function() {
					Materialize.toast('Veículo salvo')
					$location.path('/vehicle')
				})
				.catch(function(err) {
					Materialize.toast('Não foi possível salvar o veículo')
				})
		}
	})

.controller('vehicleUpdateController',
	function(
		$scope,
		$location,
		model
	) {
		model.photo = model.photo || { photo: SaveMyGas.rootRoute.getPath('/img/default-car.png') }
		$scope.model = model
		$scope.getVehicleType = vehicleService.getVehicleType
		$scope.anoAtual = (new Date()).getFullYear()

		$scope.save = function(model) {
			$scope.model.$save()
			$scope.model.$promise.then(function() {
					Materialize.toast('Veículo salvo')
					$location.path('/vehicle')
				})
				.catch(function(err) {
					Materialize.toast('Não foi possível salvar o veículo')
				})
		}
	})
