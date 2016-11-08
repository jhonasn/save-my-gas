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
		model.photo = model.photo || {
			photo: null
		}
		
		if (model.photo) {
			$scope.vehiclePhoto = vehicleService.getVehiclePhotoPath(model)
		} else {
			$scope.vehiclePhoto = SaveMyGas.rootRoute.getPath('/img/default-car.png')
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

		//ux improvment
		// $scope.vehicleModelSelected = function($item) {
		// 	if ($item.vehicleBrand) {
		// 		$scope.model.vehicleBrand = $item.vehicleBrand
		// 	}
		// }

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
