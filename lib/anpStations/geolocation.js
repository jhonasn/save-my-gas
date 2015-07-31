var path = require('path')
var req = require(path.join(rootPath, 'lib', 'request.js'))
var entity = require(path.join(rootPath, 'lib', 'anpStations', 'entities.js'))

module.exports.get = function(cb) {
	if(entity.readStationsFiles()) {
		entity.entities.stations.forEach(function(station, i) {
			var city = entity.entities.cities.filter(function(city) {
				return city.id == station.cityId
			})[0]
			/*var neighborhood = entity.entities.neighborhoods.filter(function(neighborhood) {
			  return neighborhood.id === station.neighborhoodId
			  })*/
			var state = entity.entities.states.filter(function(state) {
				return state.cities.some(function(c) {
					return c.id == station.cityId
				})
			})[0]

			var street = station.endereco.split(', ')
			var address = '{city}, {neighborhood}, {address}, {number}'
			.replace('{city}', city.name)
			.replace('{neighborhood}', station.bairro)
			.replace('{address}', street[0])
			.replace('{number}', street[1])

			req.post('https://maps.googleapis.com/maps/api/geocode/json' , {
				//key: module.gmAppKey,
				address: address
			},
			function(err, data) {
				if(err) {
					cb(err)
				} 

				console.log(data)
				cb(data)
			})
		})
	} else {
		cb('it was not possible to read the entities files')
	}
}

