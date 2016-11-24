angular.module('save-my-gas')
	.factory('fileStorageService',
		function(
			$http,
			authService,
			appConstants
		) {
			var _user = authService.getUser()
			var _userId = _user.userId
			return {
				getFilePath: function(url, containerId, fileId) {
					return appConstants.urlApi + '/' +
						url + '/' +
						containerId + '/download/' +
						fileId + '?access_token=' +
						_user.access_token
				},

				uploadContainer: function(url, containerId, file, fileName) {
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
				},

				upload: function(url, file, fileName) {
					var formData = new FormData()

					if (fileName) {
						var _ext = file.type.replace(/\w+\//, '')
						var _fileName = fileName + '.' + _ext

						formData.append('file', file, _fileName)
					} else {
						formData.append('file', file)
					}

					if(url[0] !== '/') {
						url = '/' + url
					}

					return $http.post(
						(appConstants.urlApi + url),
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
