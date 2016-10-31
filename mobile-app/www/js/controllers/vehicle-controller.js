angular.module('save-my-gas')
	.controller('vehicleController',
		function(
			$scope,
			Vehicle,
			vehicleService,
			collection
		) {
			$scope.collection = collection

			$scope.delete = function(id) {
				var model = Vehicle.deleteById({
					id: id
				})
				model.$promise.then(function() {
						Materialize.toast('Veículo deletado')
						$scope.collection = vehicleService.getCollection()
					})
					.catch(function(err) {
						Materialize.toast('Não foi possível deletar o veículo')
					})
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

		$scope.photoAttachChanged = function(files) {
			if (files.length) {
				utilService.fileToB64(files[0]).then(function(img) {
					$scope.model.photo.photo = img
				})
			}
		}

		$scope.takeCarPicture = function() {
			var options = {
				quality: 50,
				destinationType: Camera.DestinationType.DATA_URL,
				sourceType: Camera.PictureSourceType.CAMERA,
				allowEdit: true,
				encodingType: Camera.EncodingType.PNG,
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
				Materialize.toast('Ocorreu um problema ao tirar a foto :(')
			});

			if(cameraInterval) {
				$interval.cancel(cameraInterval)
			}

			cameraInterval = $interval(function () {
				var cameraEl = angular.element('.cordova-camera-capture')
				if(cameraEl) {
					var videoEl = cameraEl.find('video')
					var buttonEl = cameraEl.find('button')

					buttonEl.attr('type', 'button')
					buttonEl.addClass('btn-floating red right')
					buttonEl.html('<i class="material-icons">photo</i>')

					var cameraAppendEl = angular.element('#camera')
					cameraAppendEl.append(cameraEl)

					$scope.showCamera = true

					// $inteval.cancel(cameraInterval)//error
					clearInterval(cameraInterval.$$intervalId)
				}
			}, 100);
		}

		$scope.save = function(model) {
			$scope.model = Vehicle.create(model)
			$scope.model.$promise.then(function() {
					Materialize.toast('Veículo salvo')
					$location.path('/vehicle')
				})
				.catch(function(err) {
					Materialize.toast('Não foi possível salvar o veículo')
				})
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
