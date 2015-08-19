var path = require('path')
var async = require('async')
var qs = require('querystring')
var util = require('util')
var readline = require('readline')
var req = require(path.join(rootPath, 'lib', 'request.js'))
var entity = require(path.join(rootPath, 'lib', 'anp-stations', 'entities.js'))

module.stations = []
var rl = null

module.exports.start = function(cb) {
	if(entity.readStationsFiles()) {
		module.stations = entity.entities.stations.filter(function(station) {
			return typeof station.geolocation === 'object'
		})

		module.improveArray()
		module.consoleStart()

		module.menu(cb)
	} else {
		cb('it was not possible to read the entities files')
	}
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

module.getConsoleResponse = function(cb) {

}

module.clearConsole = function() {
	var lines = process.stdout.getWindowSize()[1];
	var lineJumpString = ''
	for(var i = 0; i < lines; i++) {
		lineJumpString += '\r\n'
	}
	console.log(lineJumpString)
}

module.menu = function(cb) {

	console.log('--Geolocation Station Fixer--')
	console.log('[c] see current station')
	console.log('[n] see next station')
	console.log('[p] see previous station')
	console.log('[e] edit station and try to fix it')
	console.log('[q] to quit')
	console.log()
	rl.question('make your choice and press enter: ', function(answer) {
		module.clearConsole()
		var inspectOptions = { showHidden: false, depth: null, colors: true }
		switch(answer) {
			case 'c':
				console.log('Current Station:\n', util.inspect(module.stations.current(), inspectOptions))
			break;
			case 'n':
				console.log('Next Station (current now):\n', util.inspect(module.stations.next(), inspectOptions))
			break;
			case 'p':
				console.log('Previous Station (current now):\n', util.inspect(module.stations.back(), inspectOptions))
			break;
			case 'e':
				console.log('Edit Current Station, implementing...')
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

module.menuEditStation = function(station) {
	var stationAddress = module.getAddressStation(station)

	params = {
		address: number,
		components: 'country:BR|administrative_area:{state}|locality:{city}|sublocality:{neighborhood}|route:{street}'
		.replace('{state}', state.name)
		.replace('{city}', city.name)
		.replace('{neighborhood}', station.bairro)
		.replace('{street}', street)
		.replace('{number}', number),
		language: 'pt-BR',
		region: 'br',
		key: module.gmAppKey
	}
}

module.getAddressStation = function(station) {
	var address = {
		city: entity.getStationCity(station),
		state: entity.getStationState(station),
		street: station.endereco
		.replace('S/n', '')
		.replace('º', '')
		.split(', '),
		number: ''
	}

	if(address.street.length > 1) {
		address.number = street[1].trim()
		address.street = street[0].trim()
	} else {
		address.street = street[0].trim()
	}

	return address
}
module.sendStation = function(params) {
	req.get('https://maps.googleapis.com/maps/api/geocode/json?' + qs.stringify(params), 
		function(err, data) {
			var response = JSON.parse(data)

			/*response.status:
			 * OK
			 * ZERO_RESULTS
			 * OVER_QUERY_LIMIT
			 * REQUEST_DENIED
			 * INVALID_REQUEST
			 * UNKNOWN_ERROR
			 */
		})
}
