angular.module('save-my-gas')

.factory('fileStorageService',
	function(
		$http,
		VehiclePhoto,
		authService,
		appConstants
	) {
		var _user = authService.getUser()
		var _userId = _user.userId
		return {
			init: function() {
				var vehiclePhotoCreateMyContainer = function() {
					VehiclePhoto.createContainer({
							name: _userId
						})
						.$promise
						.catch(function(err) {
							if (!err.specified) {
								Materialize.toast('Ocorreu um erro na inicialização de arquivos do seu usuário')
								authService.logout()
							}
						})
				}

				authService.skipMessageNextRequests()

				VehiclePhoto.getContainer({
						container: _userId
					})
					.$promise
					.catch(function(err) {
						if (err.status === 404) {
							vehiclePhotoCreateMyContainer()
						}
					})
					.finally(authService.requestsWithoutMessageCompleted)
			},

			getFilePath: function(url, containerId, fileId) {
				return appConstants.urlApi + '/' +
					url + '/' +
					containerId + '/download/' +
					fileId + '?access_token=' +
					_user.access_token
			},

			upload: function(url, containerId, file, fileName) {
				var formData = new FormData()

				if (fileName) {
					var _ext = file.type.replace(/\w+\//, '')
					var _fileName = fileName + '.' + _ext

					formData.append('file', file, _fileName)
				} else {
					formData.append('file', file)
				}

				return $http.post(
					(appConstants.urlApi + '/' + url + '/' + containerId + '/upload'),
					formData, {
						headers: {
							'Content-Type': undefined
						},
						transformRequest: angular.identity,
						// responseType: 'arraybuffer'
					}
				)
			}
		}
	})
