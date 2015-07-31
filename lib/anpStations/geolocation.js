var path = require('path')
var async = require('async')
var req = require(path.join(rootPath, 'lib', 'request.js'))
var entity = require(path.join(rootPath, 'lib', 'anpStations', 'entities.js'))


module.exports.get = function(cb) {
	if(entity.readStationsFiles()) {
		var getGeolocationFunctions = []
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
			var number = ''
			if(street.length > 1) {
				number = street[1]
				street = street[0]
			} else {
				street = street[0]
			}

			/*
			   var address = '{state}, {city}, {neighborhood}, {address}, {number}'
			   .replace('{state}', state.name)
			   .replace('{city}', city.name)
			   .replace('{neighborhood}', station.bairro)
			   .replace('{address}', street)
			   .replace('{number}', number)
			   */

			var params = {
				address: number,
				components: 'country:BR|administrative_area:{state}|locality:{city}|neighborhood:{neighborhood}|route:{street}'
				.replace('{state}', state.name)
				.replace('{city}', city.name)
				.replace('{neighborhood}', station.bairro)
				.replace('{address}', street)
				.replace('{number}', number)

			}

			getGeolocationFunctions.push(async.apply(module.getGeolocation, address, station))
		})

		async.parallelLimit(getGeolocationFunctions, 5, function (error, response) {
			if(err) { cb(err) }

			console.log('end of get geolocation process!')
			cb(null, response)
		})
	} else {
		cb('it was not possible to read the entities files')
	}
}

module.getGeolocation = function (params, station, cb) {
	req.post('https://maps.googleapis.com/maps/api/geocode/json', 
		 params,
		 function(err, data) {
			 if(err) {
				 cb(err)
			 } 

			 try {
				 var response = JSON.parse(data)

				 var status = 'OK'
				 if(response.status === status) {
					 var location = response.results[0].geometry.location
					 station.geolocation = '{0},{1}'
					 .replace('{0}', location.lat)
					 .replace('{1}', location.lng)
					 cb()
				 } else {
					 cb(status)
				 }
			 } catch (ex) {
				 cb(ex)
			 }
		 })
}
