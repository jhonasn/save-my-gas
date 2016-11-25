angular.module('save-my-gas')
	.controller('homeController',
		function(
			$scope,
			$interval,
			$http,
			fileStorageService,
			appConstants
		) {
			var statusId = null

			$scope.anpZipFieldChanged = function(files) {
				if (files.length) {
					var file = files[0]

					if (file.type.indexOf('zip') === -1) {
						Materialize.toast('Escolha um arquivo zip!')
						//files.clear()
					} else {
						fileStorageService.upload('/anp/init', file, 'anpData')
						.then(function(res) {
							if(res.data && res.data.message) {
								Materialize.toast(res.data.message)

								if(res.data.statusId) {
									statusId = res.data.statusId
									viewStatus()
								}
							}
						})
					}
				}
			}

			var viewStatus = function() {
				$http.get(appConstants.urlApi + '/anpLoadStatuses/' + statusId)
				.then(function(res) {
					if(res.data) {
						$scope.status = res.data
						viewStatus()
					}
				})
			}
		})
