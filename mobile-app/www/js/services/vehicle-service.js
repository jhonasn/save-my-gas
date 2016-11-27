angular.module('save-my-gas')
	.factory('vehicleService',
		function(
			$location,
			$q,
			User,
			authService,
			Vehicle,
			VehicleType,
			VehicleModel,
			VehicleBrand,
			VehicleEngine,
			FuelType,
			fileStorageService,
			customRoutesService,
			utilService,
			appConstants
		) {
			var _user = authService.getUser()
			var _userId = authService.getUser().userId

			var vehicleService = {
				getCollection: function() {
					var collection = User.vehicles({
						id: _userId,
						filter: {
							include: [
								'vehicleBrand',
								'vehicleModel',
								'vehicleType',
								'vehicleEngine',
								'fuelType'
							]
						}
					})

					collection.$promise.then(function(collection) {
						collection.forEach(function(m) {
							m.photo = m.photo || {}
							m.photo.thumb = m.photo.thumb || SaveMyGas.rootRoute.getPath('/img/default-car.png')
							m.nickName = m.nickName || '\xa0'
							m.img = vehicleService.getVehiclePhotoPath(m)
						})
					})

					return collection
				},

				findById: function(id) {
					return Vehicle.findById({
						id: id,
						filter: {
							include: [
								'vehicleBrand',
								'vehicleModel',
								'vehicleType',
								'vehicleEngine',
								'fuelType'
							]
						}
					})
				},

				save: function(viewModel) {
					//preserve model from view
					var model = angular.copy(viewModel)

					var relatedEntitiesPromises = {}

					if (!utilService.isObjectId(model.vehicleModelId)) {
						var vehicleModel = { name: angular.copy(model.vehicleModelId) }
						delete model.vehicleModelId

						vehicleModel = VehicleModel.save(vehicleModel)
						relatedEntitiesPromises.vehicleModel = vehicleModel.$promise
					}
					delete model.vehicleModel.noResults
					delete model.vehicleModel

					if (!utilService.isObjectId(model.vehicleBrandId)) {
						var vehicleBrand = { name: angular.copy(model.vehicleBrandId) }
						delete model.vehicleBrandId

						vehicleBrand = VehicleBrand.save(vehicleBrand)
						relatedEntitiesPromises.vehicleBrand = vehicleBrand.$promise
					}
					delete model.vehicleBrand.noResults
					delete model.vehicleBrand

					if (!utilService.isObjectId(model.vehicleEngineId)) {
						var vehicleEngine = angular.copy(model.vehicleEngine)
						delete model.vehicleEngineId

						vehicleEngine = VehicleEngine.save(vehicleEngine)
						relatedEntitiesPromises.vehicleEngine = vehicleEngine.$promise
					}
					delete model.vehicleEngine.noResults
					delete model.vehicleEngine

					var errorMessage = function(err) {
						Materialize.toast('Não foi possível salvar o veículo')
						defered.reject(err)
					}

					var defered = $q.defer()

					$q.all(relatedEntitiesPromises).then(function(results) {
						if(!model.vehicleBrandId) {
							model.vehicleBrandId = results.vehicleBrand.id
						}
						if(!model.vehicleModelId) {
							model.vehicleModelId = results.vehicleModel.id
						}
						if (!model.vehicleEngineId) {
							model.vehicleEngineId = results.vehicleEngine.id
						}

						if (model.$save) {
							model.$save()
						} else {
							model = User.vehicles.create({
								id: model.ownerId
							}, model)
						}
						model.$promise.then(function() {
								Materialize.toast('Veículo salvo')
								$location.path('/vehicle')
								defered.resolve()
							})
							.catch(errorMessage)
					}).catch(errorMessage)

					return defered.promise
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
				},

				getVehiclePhotoName: function(model) {
					var defered = $q.defer()

					var photoName = function(model) {
						return model.photo.photo = 'vehicle-photo-' + model.id
					}

					if (model.id) {
						defered.resolve(photoName(model))
					} else {
						customRoutesService.generateId()
							.then(function(response) {
								model.id = response.data.id
								defered.resolve(photoName(model))
							})
							.catch(function(err) {
								if (!err.specified) {
									Materialize.toast('Não foi possivel gerar um identificador da foto do seu veículo')
								}
								defered.reject(err)
							})
					}

					return defered.promise
				},

				uploadPhoto: function(file, model) {
					vehicleService.getVehiclePhotoName(model).then(function(photoName) {
						fileStorageService.upload('vehiclesPhotos', _userId, file, photoName)
							.then(function(response) {
								if (
									response.data &&
									response.data.result &&
									response.data.result.files &&
									response.data.result.files.file &&
									response.data.result.files.file.length
								) {
									model.photo.photo = response.data.result.files.file[0].name
									Materialize.toast('A foto do seu carango foi salva')
								} else {
									Materialize.toast('Não foi possível salvar a foto do seu veículo :(')
								}
							})
							.catch(function(err) {
								if (!err.specified) {
									Materialize.toast('Ocorreu um erro ao salvar a foto do seu arquivo')
								}
							})
					})
				},

				getVehiclePhotoPath: function(model) {
					return fileStorageService.getFilePath(
						'vehiclesPhotos',
						_userId,
						model.photo.photo
					)
				}
			}

			return vehicleService
		})
