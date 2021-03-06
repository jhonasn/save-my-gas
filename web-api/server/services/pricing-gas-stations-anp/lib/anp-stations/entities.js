var path = require('path')
var fs = require('fs')

module.exports.entities = {
	states: [],
	cities: [],
	neighborhoods: [],
	fuelTypes: [],
	stations: [],
	sellPrices: [],
}

module.exports.readStationsFiles = function(entitiesPath) {
	if (!entitiesPath) {
		entitiesPath = path.join(rootPath, 'lib', 'tempData')
	}

	if (fs.existsSync(entitiesPath)) {

		var pathJson = path.join(entitiesPath, 'fuelTypes.json')
		if (fs.existsSync(pathJson)) {
			module.exports.entities.fuelTypes = JSON.parse(fs.readFileSync(pathJson, 'utf-8'))
		}

		pathJson = path.join(entitiesPath, 'states.json')
		if (fs.existsSync(pathJson)) {
			module.exports.entities.states = JSON.parse(fs.readFileSync(pathJson, 'utf-8'))
		}

		pathJson = path.join(entitiesPath, 'cities.json')
		if (fs.existsSync(pathJson)) {
			module.exports.entities.cities = JSON.parse(fs.readFileSync(pathJson, 'utf-8'))
		}

		pathJson = path.join(entitiesPath, 'ppStations.json')
		if (fs.existsSync(pathJson)) {
			module.exports.entities.stations = JSON.parse(fs.readFileSync(pathJson, 'utf-8'))
		}

		if (!module.exports.entities.stations || module.exports.entities.stations.length === 0) {
			pathJson = path.join(entitiesPath, 'stations.json')
			if (fs.existsSync(pathJson)) {
				module.exports.entities.stations = JSON.parse(fs.readFileSync(pathJson, 'utf-8'))
			}
		}

		return true
	} else {
		if (fs.mkdirSync(entitiesPath)) {
			return false
		}
	}
}

module.exports.save = function(type, values) {
	try {
		fs.writeFileSync(path.resolve(entitiesPath, type + '.json'), JSON.stringify(values))
		return true
	} catch (ex) {
		return false
	}
}

module.exports.delete = function(type) {
	try {
		fs.unlink(path.resolve(entitiesPath, type + '.json'))
		return true
	} catch (ex) {
		return false
	}
}

module.exports.deleteOldFiles = function() {
	var files = fs.readdirSync(entitiesPath)

	for (var file in files) {
		file = files[file]
		file = path.join(entitiesPath, file)
		if (!fs.statSync(file).isDirectory()) {
			fs.unlinkSync(file)
		}
	}

	for (var entity in module.exports.entities) {
		if (Array.isArray(module.exports.entities[entity])) {
			module.exports.entities[entity] = []
		}
	}
}

module.exports.getStationCity = function(station) {
	var cities = module.exports.entities.cities.filter(function(city) {
		return city.id == station.cityId
	})

	if (cities.length > 0) {
		return cities[0]
	} else {
		return null
	}
}

module.exports.getStationState = function(station) {
	var states = module.exports.entities.states.filter(function(state) {
		return state.cities.some(function(c) {
			return c.id == station.cityId
		})
	})
	if (states.length > 0) {
		return states[0]
	} else {
		return null
	}
}

module.exports.getCityState = function(city) {
	var state = module.exports.entities.states.filter(function(st) {
		return st.cities.some(function(c) {
			return c.id = city.id
		})
	})

	if (state.length) {
		return state[0]
	} else {
		return null
	}
}
