angular.module('save-my-gas')

.factory('vehicleRefuelService',
	function(
		$location,
		$q,
		User,
		Vehicle,
		// FuelType,
		authService,
		utilService,
		appConstants
	) {
		var _user = authService.getUser()
		var _userId = authService.getUser().userId

		var vehicleRefuelService = {
			getCollection: function(vehicleId) {
				var collection = Vehicle.vehicleRefuels({
					id: vehicleId,
					filter: {
						include: {
							relation: 'gasStation',
							scope: {
								fields: [
									'flag',
									'companyName',
									'cityId',
								],
								include: {
									relation: 'city',
									scope: {
										fields: [
											'name'
										]
									}
								}
							}
						},
						fields: [
							'id',
							'value',
							'gasStationId'
						]
					}
				})

				return collection
			},

			getCount: function(vehicleId) {
				return Vehicle.vehicleRefuels.count({
					id: vehicleId
				})
			},

			getUserVehicles: function() {
				var vehicles = User.vehicles({
					id: _userId,
					filter: {
						include: {
							relation: 'vehicleModel',
							scope: {
								fields: ['name']
							}
						},
						fields: [
							'id',
							'nickName',
							'vehicleModelId'
						]
					}
				})

				vehicles.$promise.then(function(vehicles) {
					vehicles.forEach(function(vehicle) {
						vehicle.nickName = vehicle.nickName && vehicle.nickName.trim() ? vehicle.nickName : vehicle.vehicleModel.name
					})
				})

				return vehicles
			},

			findById: function(id) {
				return VehicleRefuel.findById({
					id: id
				})
			},

			save: function(viewModel) {
				//preserve model from view
				var model = angular.copy(viewModel)

				if (model.$save) {
					model.$save()
				} else {
					model = Vehicle.vehicleRefuels.create({
						id: model.vehicleId
					}, model)
				}

				model.$promise.then(function(model) {
						Materialize.toast('Abastecimento salvo')
						$location.path('/vehicle-refuel/' + model.vehicleId)
					})
					.catch(function() {
						Materialize.toast('Não foi possível salvar o abastecimento')
					})

				return model.$promise
			},

			delete: function(model) {
				return Vehicle.vehicleRefuels.destroyById({
						id: model.vehicleId,
						fk: model.id
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
