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
		$location,
		$cordovaCamera,
		$interval,
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
		$scope.showCamera = false

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
			vehicleService.takeCarPicture($scope)
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
		delete model.vehicleBrand
		delete model.vehicleModel
		delete model.vehicleType
		delete model.vehicleEngine
		delete model.fuelType
	})

// .controller('vehicleUpdateController',
// 	function(
// 		$scope,
// 		$location,
// 		vehicleService,
// 		model
// 	) {
// 		$scope.model = model
// 		$scope.anoAtual = (new Date()).getFullYear()
// 		$scope.showCamera = false
//
// 		$scope.save = function(model) {
// 			$scope.model.$save()
// 			$scope.model.$promise.then(function() {
// 					Materialize.toast('Veículo salvo')
// 					$location.path('/vehicle')
// 				})
// 				.catch(function(err) {
// 					Materialize.toast('Não foi possível salvar o veículo')
// 				})
// 		}
// 	})
