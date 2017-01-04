angular.module('save-my-gas')

.filter('geoString',
	function(utilService) {
		return function(geo) {
			return utilService.geoToString(geo)
		}
	})

.filter('distance',
	function(utilService) {
		return function(distance) {
			return utilService.formatDistance(distance)
		}
	})

.filter('liters',
	function(utilService) {
		return function(liters, decimal) {
			return utilService.formatLiters(liters, decimal)
		}
	})

.filter('time',
	function(utilService) {
		return function(time, format) {
			return utilService.time.milisToTime(time, format)
		}
	})
