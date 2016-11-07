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
			}
		})

.controller('vehicleCreateController',
	function(
		$scope,
		$location,
		$cordovaCamera,
		$interval,
		utilService,
		vehicleService,
		Vehicle,
		model
	) {
		$scope.$parent.container = false
		model.photo = {
			photo: SaveMyGas.rootRoute.getPath('/img/default-car.png')
		}
		$scope.model = model
		$scope.anoAtual = (new Date()).getFullYear()
		$scope.showCamera = false
		var cameraInterval = null
		$scope.autocomplete = vehicleService.autocomplete

		$scope.photoAttachChanged = function(files) {
			if (files.length) {
				utilService.fileToB64(files[0]).then(function(img) {
					if (img.indexOf('image') === -1) {
						Materialize.toast('Escolha uma IMAGEM')
						$scope.model.photo.photo = null
					} else {
						$scope.model.photo.photo = img
							// $scope.model.photo.thumb = utilService.resizeImg(img, 100, 100)
					}
				})
			}
		}

		$scope.takeCarPicture = function() {
			vehicleService.takeCarPicture($scope)
		}

		$scope.vehicleModelSelected = function($item) {
			if ($item.vehicleBrand) {
				$scope.model.vehicleBrand = $item.vehicleBrand
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
	})

.controller('vehicleUpdateController',
	function(
		$scope,
		$location,
		model
	) {
		model.photo = model.photo || {
			photo: SaveMyGas.rootRoute.getPath('/img/default-car.png')
		}
		$scope.model = model
		$scope.anoAtual = (new Date()).getFullYear()

		$scope.save = function(model) {
			$scope.model.$save()
			$scope.model.$promise.then(function() {
					Materialize.toast('Veículo salvo')
					$location.path('/vehicle')
				})
				.catch(function(err) {
					Materialize.toast('Não foi possível salvar o veículo')
				})
		}
	})
