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

		$scope.setDirty = function (form) {
			form.$setDirty()
		}

		$scope.photoAttachChanged = function(files) {
			if (files.length) {
				utilService.fileToB64(files[0]).then(function(img) {
					if(img.indexOf('image') === -1) {
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
				if(typeof err === 'string' && err.indexOf('cancelled') > -1) {
					console.info('tirar foto cancelado')
				} else {
					Materialize.toast('Ocorreu um problema ao tirar a foto :(')
				}
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
