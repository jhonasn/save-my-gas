angular.module('save-my-gas')

.factory('customRoutesService',
	function(
		$http,
		VehiclePhoto,
		authService,
		appConstants
	) {
		return {
			generateId: function() {
				return $http.get(appConstants.urlApi + '/generateId')
			}
		}
	})
