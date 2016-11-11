//this file will upload data to database
var path = require('path')
var app = require('../../../../web-api/server/server')
var entities = require(path.resolve(rootPath, 'lib', 'anp-stations', 'entities'))

module.exports.load = function(entitiesPath, cb) {
	if(!entities.readStationsFiles(entitiesPath)) {
		cb('error reading station json files')
		return
	}

	// entities.entities.states
	// entities.entities.cities
	// entities.entities.neighborhoods
	// entities.entities.fuelTypes
	// entities.entities.stations
	// entities.entities.sellPrices

	//boot?
	//app.datasources.mongodb

	entities.entities.states.map(function(s) {
		return {
			name: s.name,
			fu: s.id
		}
	}).forEach(function(s) {
		app.models.state.findOrCreate(s)
	})

	cb(null, 'ok!')
}
