angular.module('save-my-gas')

.factory('vehicleRefuelService',
	function(
		$location,
		$q,
		User,
		authService,
		VehicleRefuel,
		// FuelType,
		utilService,
		appConstants
	) {
		var _user = authService.getUser()
		var _userId = authService.getUser().userId

		var vehicleRefuelService = {
			getCollection: function(vehicleId) {
				var collection = VehicleRefuel.find({
					id: vehicleId
				})

				// collection.$promise.then(function(collection) {
				// 	collection.forEach(function(m) {
				// 		m.photo = m.photo || {}
				// 		m.photo.thumb = m.photo.thumb || SaveMyGas.rootRoute.getPath('/img/default-car.png')
				// 		m.nickName = m.nickName || '\xa0'
				// 		m.img = vehicleService.getVehiclePhotoPath(m)
				// 	})
				// })

				return collection
			},

			findById: function(id) {
				return Vehicle.findById({
					id: id
				})
			},

			save: function(viewModel) {
				//preserve model from view
				var model = angular.copy(viewModel)

				if (model.$save) {
					model.$save()
				} else {
					model = User.vehicleRefuels.create({
						id: model.ownerId
					}, model)
				}

				model.$promise.then(function() {
						Materialize.toast('Veículo salvo')
						$location.path('/vehicle')
						defered.resolve()
					})
					.catch(function() {
						Materialize.toast('Não foi possível salvar o veículo')
					})

				return model.$promise
			},

			deleteById: function(id) {
				return User.vehicles.destroyById({
						id: _userId,
						fk: id
					})
					.$promise
					.then(function() {
						Materialize.toast('Veículo deletado')
					})
					.catch(function(err) {
						Materialize.toast('Não foi possível deletar o veículo')
					})
			}
		}

		return vehicleRefuelService
	})
