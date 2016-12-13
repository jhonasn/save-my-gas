angular.module('save-my-gas')

.factory('simulatorService',
	function(
		$location,
		$q,
		User,
		Vehicle,
		// FuelType,
		authService,
		utilService,
		vehicleRefuelService,
		appConstants
	) {
		var _user = authService.getUser()
		var _userId = authService.getUser().userId

		var simulatorService = {
			getUserVehiclesIds: function() {
				return User.vehicles({
					id: _userId,
					filter: {
						fields: ['id']
					}
				})
			},

			verifyVehiclesRefuels: function() {
				var defered = $q.defer()

				simulatorService.getUserVehiclesIds()
					.$promise
					.then(function(vehiclesIds) {
						if (!vehiclesIds.length) {
							Materialize.toast('Você não cadastrou nenhum veículo, cadastre algum para fazer a simulação')
							defered.reject('no vehicles')
							$location.path('/vehicle')
						} else {
							var count = 0
							var countThen = function(res) {
								if (res.count) {
									defered.resolve()
								} else if (!res.count && vehiclesIds[++count]) {
									vehicleRefuelService.getCount(vehiclesIds[count].id)
										.$promise
										.then(countThen)
								} else if (!res.count && !vehiclesIds[count]) {
									Materialize.toast('Seus veículos não tem abastecimentos cadastrados, cadastre um abastecimento para algum veículo para fazer a simulação')
									defered.reject('no refuels')
									$location.path('/vehicle-refuel')
								}
							}
							vehicleRefuelService.getCount(vehiclesIds[count].id)
								.$promise
								.then(countThen)
								.catch(function(err) {
									console.error(err)
									defered.reject(err)
								})
						}
					})

				return defered.promise
			},

			verifyVehicleRefuels: function(vehicleId) {
				vehicleRefuelService.getCount(vehicleId)
					.$promise
					.then(function(res) {
						if (!res.count) {
							Materialize.toast('O veículo selecionado não possui abastecimentos cadastrados, cadastre um para fazer a simulação')
							$location.path('/vehicle-refuel/' + vehicleId)
						}
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

		return simulatorService
	})
