angular.module('save-my-gas')
	.controller('homeController',
		function(
			$scope,
			$timeout,
			$http,
			fileStorageService,
			appConstants
		) {
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
									$scope.viewStatus(res.data.statusId)
								}
							}
						})
					}
				}
			}

			$scope.viewStatus = function(id) {
				$http.get(appConstants.urlApi + '/anpLoadStatuses/' + id)
				.then(function(res) {
					if(res.data) {
						$scope.status = res.data
						$timeout(function() { $scope.viewStatus(id) }, 1000)
					}
				})
			}
		})
