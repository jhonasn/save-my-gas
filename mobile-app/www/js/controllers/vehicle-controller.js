angular.module('save-my-gas')

.controller('vehicleController',
	function(
		$scope,
		vehicleService,
		collection
	) {
		$scope.collection = collection

		$scope.delete = function(id) {
			vehicleService.deleteById(id)
				.then(function() {
					$scope.collection = vehicleService.getCollection()
				})
		}
	})

.controller('vehicleEditController',
	function(
		$scope,
		$cordovaCamera,
		utilService,
		vehicleService,
		model
	) {
		if (model.photo) {
			$scope.vehiclePhoto = vehicleService.getVehiclePhotoPath(model)
		} else {
			$scope.vehiclePhoto = SaveMyGas.rootRoute.getPath('/img/default-car.png')
		}

		model.photo = model.photo || {
			photo: null
		}

		$scope.model = model
		$scope.anoAtual = (new Date()).getFullYear()

		$scope.photoAttachChanged = function(files) {
			if (files.length) {
				var file = files[0]
				utilService.fileToB64(file).then(function(img) {
					if (img.indexOf('image') === -1) {
						Materialize.toast('Escolha uma IMAGEM')
						$scope.model.photo.photo = null
					} else {
						$scope.vehiclePhoto = img
						$scope.model.photo.photo = file.name
							// $scope.model.photo.thumb = utilService.resizeImg(img, 100, 100)
						vehicleService.uploadPhoto(file, $scope.model)
					}
				})
			}
		}

		$scope.takeCarPicture = function() {
			var options = {
				quality: 80,
				destinationType: Camera.DestinationType.DATA_URL,
				sourceType: Camera.PictureSourceType.CAMERA,
				allowEdit: true,
				encodingType: Camera.EncodingType.JPEG,
				targetWidth: 1280,
				targetHeight: 960,
				popoverOptions: CameraPopoverOptions,
				saveToPhotoAlbum: false,
				correctOrientation: true
			};

			$cordovaCamera.getPicture(options).then(function(imageData) {
				$scope.vehiclePhoto = "data:image/jpeg;base64," + imageData
				var file = utilService.B64ToFile($scope.vehiclePhoto)
				vehicleService.uploadPhoto(file, $scope.model, $scope.model.id)
			}, function(err) {
				if (typeof err === 'string' && err.indexOf('cancelled') > -1) {
					console.info('tirar foto cancelado')
				} else {
					Materialize.toast('Ocorreu um problema ao tirar a foto :(')
				}
			})
		}

		$scope.vehicleModelSelected = function($item) {
			if ($item.vehicleBrand) {
				$scope.model.vehicleBrandId = $item.vehicleBrand
			}
			if ($item.vehicleType) {
				$scope.model.vehicleTypeId = $item.vehicleType
			}
			if ($item.vehicleEngine) {
				$scope.model.vehicleEngineId = $item.vehicleEngine
			}
		}

		$scope.formatEngine = function(vehicleEngine) {
			return vehicleEngine.power + ' - ' + vehicleEngine.valve + 'v'
		}

		$scope.save = function(model) {
			vehicleService.save(model)
		}

		$scope.vehicleEngineParamsMake = function(searchTerm) {
			return {
				filter: {
					where: {
						or: [{
							power: {
								like: searchTerm
							}
						}, {
							valve: {
								like: searchTerm
							}
						}]
					},
					limit: 10
				}
			}
		}

		//remove relations to get the relation of fk selected by the autocomplete
		delete $scope.model.vehicleBrand
		delete $scope.model.vehicleModel
		delete $scope.model.vehicleType
		delete $scope.model.vehicleEngine
		delete $scope.model.fuelType

		$scope.model.vehicleBrand = {
			noResults: null
		}
		$scope.model.vehicleModel = {
			noResults: null
		}
		$scope.model.vehicleEngine = {
			power: null,
			valve: null,
			noResults: null
		}
	})
