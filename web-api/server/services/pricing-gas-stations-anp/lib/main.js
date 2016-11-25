var path = require('path')
rootPath = path.resolve(__dirname, '../')
var startTime = new Date()
var updateStations = require(path.resolve(rootPath, 'lib', 'anp-stations', 'get'))
var stationsTransform = require(path.resolve(rootPath, 'lib', 'anp-stations', 'transform'))
var geolocation = require(path.resolve(rootPath, 'lib', 'anp-stations', 'geolocation'))
var geolocationFix = require(path.resolve(rootPath, 'lib', 'anp-stations', 'geolocation-fix.js'))
var dbLoadEntities = require(path.resolve(rootPath, 'lib', 'anp-stations', 'load'))
var entities = require(path.resolve(rootPath, 'lib', 'anp-stations', 'entities'))

module.exports = {
	get: updateStations,
	transform: stationsTransform,
	geolocation: geolocation,
	load: dbLoadEntities
}
