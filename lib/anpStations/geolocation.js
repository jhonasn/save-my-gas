var path = require('path')
var req = require(path.join(rootPath, 'lib', 'request.js'))
var entity = require(path.join(rootPath, 'lib', 'anpStations', 'entities.js'))

module.exports.get = function() {
	if(entity.readStationsFiles()) {
		var addressBuffer = []
		entity.entities.stations.forEach(function(station, i) {
			var city = entity.entities.cities.filter(function(city) {
				return city.id === station.cityId
			})
			var neighborhood = entity.entities.neighborhoods.filter(function(neighborhood) {
				return neighborhood.id === station.neighborhoodId
			})
			var state = entity.entities.states.filter(function(state) {
				return state.id === station.stateId
			})

			var address = '{city}, {neighborhood}, {address}, {number}'
			.replace('{city}', city.name)
			.replace('{neighborhood}', neighborhood.name)
			.replace('{address}', address.name)
			.replace('{number}', address.number)

			addressBuffer.push(address)
			if(addressBuffer.length === 10) {
				req.get('https://maps.googleapis.com/maps/api/distancematrix/json' , {
					//key: module.gmAppKey,
					origins: this.geolocaionStr,
					destinations: destinationsPoints.join('|'),
					travelMode: 'DRIVING'
				},
				function(data) {

				})
			}
		})
	} else {
		return false
	}
}

