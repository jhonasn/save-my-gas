angular.module('save-my-gas')
	.factory('vehicleService',
		function(
			User,
			authService,
			VehicleType,
			VehicleModel,
			VehicleBrand,
			FuelType
		) {
			return {
				getCollection: function() {
					var collection = User.vehicles({
						id: authService.getUser().userId,
						filter: {
							include: [
								'vehicleBrand',
								'vehicleModel',
								'vehicleType',
								'fuelType'
							]
						}
					})

					collection.$promise.then(function(collection) {
						collection.forEach(function(m) {
							m.photo = m.photo || {}
							m.photo.thumb = m.photo.thumb || SaveMyGas.rootRoute.getPath('/img/default-car.png')
							m.nickName = m.nickName || '\xa0'
						})
					})

					return collection
				},

				autocomplete: {
					vehicleType: function(search) {
						return VehicleType.find({
							filter: {
								where: {
									type: {
										regexp: search
									}
								},
								limit: 10
							}
						}).$promise
					},

					vehicleModel: function(search) {
						return VehicleModel.find({
							filter: {
								where: {
									name: {
										regexp: search
									}
								},
								limit: 10
							}
						}).$promise
					},

					vehicleBrand: function(search) {
						return VehicleModel.find({
							filter: {
								where: {
									name: {
										regexp: search
									}
								},
								limit: 10
							}
						}).$promise
					},

					fuelType: function(search) {
						return FuelType.find({
							filter: {
								where: {
									name: {
										regexp: search
									}
								},
								limit: 10
							}
						}).$promise
					},

				},

				deleteById: function(id) {
					User.vehicles({
							id: authService.getUser().userId,
							fk: id
						})
						.$promise
						.then(function() {
							Materialize.toast('Veículo deletado')
							$scope.collection = vehicleService.getCollection()
						})
						.catch(function(err) {
							Materialize.toast('Não foi possível deletar o veículo')
						})
				}
			}
		})
