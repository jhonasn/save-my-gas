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
					VehiclePhoto.getContainers()
					.$promise
					.then(function (containers) {
						if(!containers.length) {
							VehiclePhoto.createContainer({ name: _userId })
							.$promise
							.catch(function (err) {
								if(!err.specified) {
									Materialize.toast('Ocorreu um erro na inicialização de arquivos do seu usuário')
								}
							})
						}
					})
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

					//not naming files for while..
					// var _ext = file.type.replace(/\w+\//, '')
					// var _fileName = fileName + '.' + _ext
					//
					// formData.append('file', file, _fileName)
					
					formData.append('file', file)

					return $http.post(
						(appConstants.urlApi + '/' + url + '/' + containerId + '/upload'),
						formData, {
							headers: {
								'Content-Type': undefined
							},
							transformRequest: angular.identity,
							params: {
								formData
							},
							// responseType: 'arraybuffer'
						}
					)
				}
			}
		})
