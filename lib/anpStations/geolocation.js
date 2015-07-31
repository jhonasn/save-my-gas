var path = require('path')
var async = require('async')
var qs = require('querystring')
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

			var street = station.endereco.replace('S/n', '').split(', ')
			var number = ''
			if(street.length > 1) {
				number = street[1].trim()
				street = street[0].trim()
			} else {
				street = street[0].trim()
			}

			///*
			var address = 'BR, {state}, {city}, {neighborhood}, {address}, {number}'
			.replace('{state}', state.id)
			.replace('{city}', city.name)
			.replace('{neighborhood}', station.bairro)
			.replace('{address}', street)
			.replace('{number}', number)
			//*/

			var params = {
				/*address: number,
components: 'country:BR|administrative_area:{state}|locality:{city}|sublocality:{neighborhood}|route:{street}'
.replace('{state}', state.name)
.replace('{city}', city.name)
.replace('{neighborhood}', station.bairro)
.replace('{street}', street)
.replace('{number}', number),*/
				address: address,
				//key: module.gmAppKey
			}

			getGeolocationFunctions.push(async.apply(module.getGeolocation, params, station))
		})

		async.parallelLimit(getGeolocationFunctions, 5, function (err, res) {
			if(err) { cb(err) }

			console.log('end of get geolocation process!')
			cb(null, res)
		})
	} else {
		cb('it was not possible to read the entities files')
	}
}

module.getGeolocation = function (params, station, cb) {
	req.get('https://maps.googleapis.com/maps/api/geocode/json?' + qs.stringify(params), 
		function(err, data) {
			if(err) {
				cb(err)
			} 

			try {
				var response = JSON.parse(data)

				if(response.status === 'OK') {
					var location = response.results[0].geometry.location
					station.geolocation = '{0},{1}'
					.replace('{0}', location.lat)
					.replace('{1}', location.lng)
					cb()
				} else {
					cb(response.status)
				}
			} catch (ex) {
				cb(ex)
			}
		})
}
