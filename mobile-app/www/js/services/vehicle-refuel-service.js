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
					model = VehicleRefuel.create(model)
				}

				model.$promise.then(function() {
						Materialize.toast('Abastecimento salvo')
						$location.path('/vehicle-refuel')
					})
					.catch(function() {
						Materialize.toast('Não foi possível salvar o abastecimento')
					})

				return model.$promise
			},

			deleteById: function(id) {
				return VehicleRefuel.destroyById({
						id: _userId,
						fk: id
					})
					.$promise
					.then(function() {
						Materialize.toast('Abastecimento deletado')
					})
					.catch(function(err) {
						Materialize.toast('Não foi possível deletar o abastecimento')
					})
			},

			formatCity: function(city) {
				return utilService.toTitleCase(city.name)
			},

			formatGasStation: function(gasStation) {
				return utilService.toTitleCase(
					gasStation.flag ?
					gasStation.flag + ' - ' + gasStation.companyName :
					gasStation.companyName
				)
			}
		}

		return vehicleRefuelService
	})
