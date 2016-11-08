angular.module('save-my-gas')
	.factory('vehicleService',
		function(
			$location,
			User,
			authService,
			VehicleType,
			VehicleModel,
			VehicleBrand,
			FuelType,
			fileStorageService,
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

				findById: function (id) {
					return User.vehicles.findById({id: _userId, fk: id})
				},

				save: function(model) {
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
						})
						.catch(function(err) {
							Materialize.toast('Não foi possível salvar o veículo')
						})
				},

				takeCarPicture: function($scope) {
					var options = {
						quality: 50,
						destinationType: Camera.DestinationType.DATA_URL,
						sourceType: Camera.PictureSourceType.CAMERA,
						allowEdit: true,
						encodingType: Camera.EncodingType.JPEG,
						// targetWidth: 100,
						// targetHeight: 100,
						popoverOptions: CameraPopoverOptions,
						saveToPhotoAlbum: false,
						correctOrientation: true
					};

					$cordovaCamera.getPicture(options).then(function(imageData) {
						$scope.model.photo.photo = "data:image/png;base64," + imageData;
						$scope.showCamera = false
					}, function(err) {
						if (typeof err === 'string' && err.indexOf('cancelled') > -1) {
							console.info('tirar foto cancelado')
						} else {
							Materialize.toast('Ocorreu um problema ao tirar a foto :(')
						}
					});

					if (cameraInterval) {
						$interval.cancel(cameraInterval)
					}

					cameraInterval = $interval(function() {
						var cameraEl = angular.element('.cordova-camera-capture')
						if (cameraEl) {
							var videoEl = cameraEl.find('video')
							var buttonEl = cameraEl.find('button')

							buttonEl.attr('type', 'button')
							buttonEl.addClass('btn-floating red right')
							buttonEl.html('<i class="material-icons">camera</i>')

							videoEl.removeAttr('width').removeAttr('height')
							videoEl.css('width', '100%')

							cameraEl.append(buttonEl)

							cameraEl.append('<div class="row">')
							cameraEl.find('.row').append(videoEl)
							cameraEl.append('<div class="row camera-button">')
							cameraEl.find('.row.camera-button').append(buttonEl)

							var cameraAppendEl = angular.element('#camera')
							cameraAppendEl.append(cameraEl)

							$scope.showCamera = true

							// $inteval.cancel(cameraInterval)//error
							clearInterval(cameraInterval.$$intervalId)
						}
					}, 100);
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

				uploadPhoto: function(file, model) {
					fileStorageService.upload('vehiclesPhotos', _userId, file, 'vehiclePhoto')
						.then(function(response) {
							if(
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
