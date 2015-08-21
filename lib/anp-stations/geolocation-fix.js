var path = require('path')
var async = require('async')
var qs = require('querystring')
var util = require('util')
var readline = require('readline')
var async = require('async')
var req = require(path.join(rootPath, 'lib', 'request.js'))
var entity = require(path.join(rootPath, 'lib', 'anp-stations', 'entities.js'))

module.stations = []
var rl = null

module.exports.start = function(cb) {
	if(entity.readStationsFiles()) {
		module.updateStations()

		module.improveArray()
		module.consoleStart()

		module.menu(cb)
	} else {
		cb('it was not possible to read the entities files')
	}
}

module.menu = function(cb) {

	console.log('--Geolocation Station Fixer--')
	console.log('Stations with broken geolocation: ', module.stations.length)
	console.log('[c] see current station')
	console.log('[n] see next station')
	console.log('[p] see previous station')
	console.log('[e] edit station and try to fix it')
	console.log('[q] to quit')
	console.log()
	rl.question('make your choice and press enter: ', function(answer) {
		module.clearConsole()
		switch(answer) {
			case 'c':
				console.log('Current Station:\n', module.stringJsonColor(module.stations.current()))
			break;
			case 'n':
				console.log('Next Station (current now):\n', module.stringJsonColor(module.stations.next()))
			break;
			case 'p':
				console.log('Previous Station (current now):\n', module.stringJsonColor(module.stations.back()))
			break;
			case 'e':
				module.menuEditStation()
			break;
			case 'q':
				//process.exit()
				break;
			default:
				if(answer !== undefined) {
				console.log('\n\033[31mPlease enter with an valid key as menu ask\033[91m.\n')
			}
			break;
		}
		if(answer != 'q') {
			module.menu()
		} else {
			//cb(null, 'just quit :)')
			rl.close()
		}
	})
}

module.menuEditStation = function() {
	var station = module.stations.current()
	var stationAddress = module.getAddressStation(station)

	rl.question('Address: ', function(address) {
		station.geolocation.search.address = address

		rl.question('Components: ', function(components) {
			station.geolocation.search.components = components

			params = {
				address: station.geolocation.search.address,
				components: station.geolocation.search.components,
				language: 'pt-BR',
				region: 'br',
				key: module.gmAppKey
			}

			console.log('sending station to geocoding, request params:\n')
			console.log(module.stringJsonColor(params))

			module.sendStation(params, station, function(jsonResponse) {
				console.log('\ngoogle response:\n')
				console.log(module.stringJsonColor(jsonResponse))

				if(typeof station.geolocation === 'string') {
					rl.question('It was possible to get geolocation, do you wanna save it into station? (yes, y or no, n)', function(answer) {
						if(answer.toLowerCase() === 'yes' || answer.toLocaleLowerCase() === 'y') {
							module.saveEntities()
							module.updateStations()
						} 
						module.menu()
					})
				} else {
					rl.question('The address input failed to get geolocation, do you wanna try again with this station? (yes, y or no, n)', function(answer) {
						if(answer.toLowerCase() === 'yes' || answer.toLocaleLowerCase() === 'y') {
							//i dont know how to repeat this.
							module.menuEditStation()
						} else {

							module.menu()
						}
					})
				}
			})
		})
		rl.write(station.geolocation.search.components)
	})
	rl.write(station.geolocation.search.address)

	/*
	   params = {
	   address: stationAddress.number,
	   components: 'country:BR|administrative_area:{state}|locality:{city}|sublocality:{neighborhood}|route:{street}'
	   .replace('{state}', stationAddress.state.name)
	   .replace('{city}', stationAddress.city.name)
	   .replace('{neighborhood}', stationAddress.neighboorhood)
	   .replace('{street}', stationAddress.street)
	   .replace('{number}', stationAddress.number),
	   language: 'pt-BR',
	   region: 'br',
	   key: module.gmAppKey
	   }
	   */
}

module.improveArray = function() {
	Array.prototype.i = 0

	Array.prototype.current = function() {
		return this[this.i]
	}

	Array.prototype.next = function() {
		this.i = this.i !== undefined ? this.i : 0
		this.i++
			return this[this.i]
	}

	Array.prototype.back = function() {
		this.i = this.i !== undefined ? this.i : 0
		this.i--
			return this[this.i]
	}

	Array.prototype.zero = function() {
		this.i = 0
	}
}

module.consoleStart = function() {
	rl = readline.createInterface({
		input: process.stdin,
		output: process.stdout
	})
}

module.clearConsole = function() {
	var lines = process.stdout.getWindowSize()[1];
	var lineJumpString = ''
	for(var i = 0; i < lines; i++) {
		lineJumpString += '\r\n'
	}
	console.log(lineJumpString)
}

module.stringJsonColor = function (obj) {
	var inspectOptions = { showHidden: false, depth: null, colors: true }
	return util.inspect(obj, inspectOptions)
}

module.getAddressStation = function(station) {
	var address = {
		city: entity.getStationCity(station),
		state: entity.getStationState(station),
		neighboorhood: station.bairro,
		street: station.endereco
		.replace('S/n', '')
		.replace('º', '')
		.split(', '),
		number: ''
	}

	if(address.street.length > 1) {
		address.number = address.street[1].trim()
		address.street = address.street[0].trim()
	} else {
		address.street = address.street[0].trim()
	}

	return address
}

module.sendStation = function(params, station, cb) {
	req.get('https://maps.googleapis.com/maps/api/geocode/json?' + qs.stringify(params), 
		function(err, data) {
			if(err) {
				err.myMsg = 'request error'
				cb(err, data)
			}
			/*response.status:
			 * OK
			 * ZERO_RESULTS
			 * OVER_QUERY_LIMIT
			 * REQUEST_DENIED
			 * INVALID_REQUEST
			 * UNKNOWN_ERROR
			 */

			var response = null
			try{
				response = JSON.parse(data)

				if(response.status === 'OK') {
					//response.results[0].geometry.location_type
					var location = response.results[0].geometry.location
					station.geolocation = '{0},{1}'
					.replace('{0}', location.lat)
					.replace('{1}', location.lng)
				}
			} catch (ex) {
				ex.myMsg = 'Exception error'
				cb(ex, response)
			}

			cb(response)
		})
}

module.saveEntities = function() {
	entity.save('ppStations', entity.entities.stations)
}

module.updateStations = function() {
	module.stations = entity.entities.stations.filter(function(station) {
		return typeof station.geolocation === 'object'
	})
}
