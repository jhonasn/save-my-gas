angular.module('save-my-gas')
.factory('vehicleService',
function (User, authService, VehicleType) {
	return {
		getCollection: function() {
			var collection = User.vehicles({
				id: authService.getUser().userId
			})

			collection.$promise.then(function (collection) {
				collection.forEach(function (m) {
					m.photo = m.photo || {}
					m.photo.thumb = m.photo.thumb || SaveMyGas.rootRoute.getPath('/img/default-car.png')
					m.nickName = m.nickName || '\xa0'
				})
			})

			return collection
		},

		getVehicleType: function() {
			return VehicleType.find()
		}
	}
})
