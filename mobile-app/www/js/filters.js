angular.module('save-my-gas')

.filter('geoString', function(formatService) {
	return function(geo) {
		return formatService.toGeoString(geo)
	}
})

.filter('distance', function(formatService) {
	return function(distance) {
		return formatService.distance(distance)
	}
})

.filter('liters', function(formatService) {
	return function(liters, decimal) {
		return formatService.liters(liters, decimal)
	}
})

.filter('time', function(formatService) {
	return function(time, format) {
		return formatService.time(time, format)
	}
})

.filter('gasStation', function(formatService) {
	return function(gasStation) {
		return formatService.gasStation(gasStation)
	}
})

.filter('city', function(formatService) {
	return function(city) {
		return formatService.city(city)
	}
})
