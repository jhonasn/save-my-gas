module.exports.entities = {
	states: [],
	cities: [],
	neighborhoods: [],
	fuelTypes: [],
	stations: [],
	sellPrices: []
}

module.exports.readStationsFiles = function() {
	var path = require('path')
	var fs = require('fs')


	if(fs.existsSync(entitiesPath)) {

		var pathJson = path.join(entitiesPath, 'fuelTypes.json')
		if(fs.existsSync(pathJson)) {
			module.entities.fuelTypes = JSON.parse(fs.readFileSync(pathJson, 'utf-8'))
		}

		pathJson = path.join(entitiesPath, 'states.json')
		if(fs.existsSync(pathJson)) {
			module.entities.states = JSON.parse(fs.readFileSync(pathJson, 'utf-8'))
		}

		pathJson = path.join(entitiesPath, 'cities.json')
		if(fs.existsSync(pathJson)) {
			module.entities.cities = JSON.parse(fs.readFileSync(pathJson, 'utf-8'))
		}

		pathJson = path.join(entitiesPath, 'stations.json')
		if(fs.existsSync(pathJson)) {
			module.entities.stations = JSON.parse(fs.readFileSync(pathJson, 'utf-8'))
		}
		if(!module.entities.stations || (module.entities.stations && module.entities.stations.length == 0)) {
			pathJson = path.join(entitiesPath, 'ppStations.json')
			if(fs.existsSync(pathJson)) {
				module.entities.stations = JSON.parse(fs.readFileSync(pathJson, 'utf-8'))
			}
		}

		return true
	} else {
		if(fs.mkdirSync(entitiesPath)) {
			return false
		}
	}
}
