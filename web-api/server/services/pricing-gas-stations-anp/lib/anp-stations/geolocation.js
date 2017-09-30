var path = require('path')
var async = require('async')
var qs = require('querystring')
var req = require(path.join(rootPath, 'lib', 'request.js'))
var entity = require(path.join(rootPath, 'lib', 'anp-stations', 'entities.js'))
var progress = {
	total: 0,
	current: 0,
	percent: 0
}


module.exports.get = function(cb, getFailedStations, precise) {
	if (entity.readStationsFiles()) {
		//progress.total = entity.entities.stations.length
		var stations = []

		if (getFailedStations) {
			stations = entity.entities.stations.filter(function(station) {
				return typeof station.geolocation === 'object'
			})
		} else {
			stations = entity.entities.stations.filter(function(station) {
				return station.geolocation === undefined ||
					(typeof station.geolocation === 'object' && station.geolocation.result !== 'ZERO_RESULTS')
			})
		}

		progress.total = stations.length
		console.log('statios to be searched ', progress.total)

		var getGeolocationFunctions = []

		stations.forEach(function(station, i) {
			var params = null
			var city = entity.getStationCity(station)
			var state = entity.getStationState(station)
			var address = ''

			var components = null

			if (precise) {
				var street = station.endereco
					.replace('S/n', '')
					.replace('º', '')
					.replace('  ', ' ')
					.split(', ')
				if (street.length > 1) {
					address = street[1].trim()
					street = street[0].trim()
				} else {
					street = street[0].trim()
				}

				components = 'country:BR|administrative_area:{state}|locality:{city}|sublocality:{neighborhood}|route:{street}'
					.replace('{state}', state.name)
					.replace('{city}', city.name)
					.replace('{neighborhood}', station.bairro)
					.replace('{street}', street)

			} else {
				address = station.endereco
					.replace('S/n', '')
					.replace('º', '')
					.replace('  ', ' ')

				components = 'country:BR|administrative_area:{state}|locality:{city}|sublocality:{neighborhood}'
					.replace('{state}', state.name)
					.replace('{city}', city.name)
					.replace('{neighborhood}', station.bairro)
			}

			params = {
				address: address,
				components: components,
				language: 'pt-BR',
				region: 'br',
				key: module.gmAppKey
			}


			getGeolocationFunctions.push(async.apply(module.getGeolocation, params, station))
		})

		async.parallelLimit(getGeolocationFunctions, 5, function(err, res) {

			if (err) {
				cb(err)
			}

			console.log('end of get geolocation process!')
			cb(null, res)
		})
	} else {
		cb('it was not possible to read the entities files')
	}
}

module.getGeolocation = function(params, station, cb) {
	req.get('https://maps.googleapis.com/maps/api/geocode/json?' + qs.stringify(params),
		function(err, data) {
			progress.current++
				progress.percent = (progress.current * 100) / progress.total
			console.log('processing {pc}%, station {s} of {t}'
				.replace('{pc}', progress.percent.toFixed(2))
				.replace('{s}', progress.current)
				.replace('{t}', progress.total)
			)
			if (err) {
				cb(err)
			}

			try {
				var response = JSON.parse(data)

				/*response.status:
				 * OK
				 * ZERO_RESULTS
				 * OVER_QUERY_LIMIT
				 * REQUEST_DENIED
				 * INVALID_REQUEST
				 * UNKNOWN_ERROR
				 */

				if (response.status === 'OK') {
					//response.results[0].geometry.location_type
					var location = response.results[0].geometry.location
					station.geolocation = '{0},{1}'
						.replace('{0}', location.lat)
						.replace('{1}', location.lng)
					module.saveEntities()
					cb(null, station)
				} else {
					console.log('we have a status: ', response.status)
					console.log('address: ', params.address, 'components: ', params.components)
					station.geolocation = {
						search: params,
						result: response.status
					}

					module.saveEntities()
					if (response.status === 'ZERO_RESULTS') {
						cb(null, station)
					} else {
						cb(response.status, station)
					}
				}
			} catch (ex) {
				cb(ex)
			}
		})
}

module.saveEntities = function() {
	entity.save('ppStations', entity.entities.stations)
}
