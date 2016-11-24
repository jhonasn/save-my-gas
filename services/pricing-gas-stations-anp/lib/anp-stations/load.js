//this file will upload data to database
var path = require('path')
var async = require('async')

module.entities = {
	states: null,
	cities: null,
	fuelTypes: null,
	stations: null,
	stationsProcessed: null,
}

module.exports.load = function(app, entitiesPath, callback) {
	module.unzip(entitiesPath, function(err) {
		if (err) return callback(err)

		console.log('mongodb ', app.datasources.mongodb)
		if (app.datasources.mongodb.connected) {
			module.loadConnected(app, entitiesPath, callback)
		}
		app.datasources.mongodb.on('connected', module.loadConnected)
	})
}

module.unzip = function(path, cb) {
	var AdmZip = require('adm-zip');

	var zip = new AdmZip(path);
	var zipEntries = zip.getEntries();



	//validate
	if (!zipEntries.some(function(z) {
			return z.entryName === 'ppStations.json'
		}) ||
		!zipEntries.some(function(z) {
			return z.entryName === 'stations.json'
		})
	) {
		cb('Error, the zip does not contains the stations information')
		return
	}

	zipEntries.forEach(function(zipEntry) {
		var name = zipEntry.entryName.toString().replace('.json', '')
		var data = zipEntry.getData('utf8')

		if (zipEntry.entryName === 'ppStations.json') {
			module.entities.stationsProcessed = JSON.parse(data)
		} else {
			module.entities[name] = JSON.parse(data)
		}
		console.log('unzipped ' + name + '\n')
	})

	cb(null)
}

module.loadConnected = function(app, entitiesPath, callback) {
	console.log('starting db put')

	var putFuelTypes = function(fuelTypes) {
		async.each(fuelTypes, function(f, cb) {
			app.models.fuelType.findOrCreate({
				anpId: f.id
			}, {
				name: f.name,
				anpId: f.id
			}, cb)
		}, function(err) {
			if (err) callback('error processing fuel types', err)

			app.models.fuelType.find({}, function(err, dbFuelTypes) {
				if (err) callback('error processing fuel types 2', err)

				putStates(module.entities.states, dbFuelTypes)
			})
			console.log('finished putFuelTypes')
		})
	}

	var putStates = function(states, dbFuelTypes) {
		async.each(states, function(s, cb) {
			app.models.state.findOrCreate({
				fu: s.fu
			}, {
				name: s.name,
				fu: s.id
			}, cb)
		}, function(err) {
			if (err) callback('error processing states', err)

			app.models.state.find({}, function(err, dbStates) {
				if (err) callback('error processing states 2', err)

				putCities(module.entities.cities, dbStates, dbFuelTypes)
			})
			console.log('finished putStates')
		})
	}

	var putCities = function(cities, dbStates, dbFuelTypes) {
		async.each(cities, function(c, cb) {
			var state = module.getCityState(c.id, module.entities.states)
			var dbState = dbStates.filter(function(ds) {
				return ds.fu === state.id
			})
			if (!dbState.length) {
				callback('it wasn\'t possible find the city\'s state ' + c.name)
			}
			dbState = dbState[0]
			app.models.city.findOrCreate({
				anpId: c.id
			}, {
				name: c.name,
				anpId: c.id,
				stateId: dbState.id //fu
			}, cb)
		}, function(err) {
			if (err) callback('error processing cities', err)

			app.models.city.find({}, function(err, dbCities) {
				if (err) callback('error processing cities 2', err)

				putStations(module.entities.stations, dbCities, dbFuelTypes)
			})
			console.log('finished putCities')
		})
	}

	var putStations = function(stations, dbCities, dbFuelTypes) {
		var i = 0
		var stationsUnique = stations.filter(function(s) {
			return s.invoiceOk
		}).reduce(function(prev, curr) {
			if (i % 500 === 0) {
				console.log('station reduce working: ', i++, '/', stations.length)
			}
			if (!Array.isArray(prev)) {
				if (prev.razaoSocial.toLowerCase() === curr.razaoSocial.toLowerCase()) {
					return [prev]
				} else {
					return [prev, curr]
				}
			} else {
				var exists = prev.some(function(p) {
					return p.razaoSocial.toLowerCase() === curr.razaoSocial.toLowerCase()
				})

				if (!exists) {
					prev.push(curr)
				}
				return prev
			}
		})
		console.log('### station reduce completed ### ')

		async.each(stationsUnique, function(s, cb) {
			var dbCity = dbCities.filter(function(dc) {
				return dc.anpId === s.cityId
			})
			if (!dbCity.length) {
				callback('It wasn\'t possible to retrieve the city of gas station ' + s.razaoSocial)
			}
			dbCity = dbCity[0]

			//for first load to database
			var stationProcessed = module.entities.stationsProcessed.filter(function(sp) {
				return sp.razaoSocial.toLowerCase() === s.razaoSocial.toLowerCase()
			})
			if (stationProcessed.length) {
				stationProcessed = stationProcessed[0]
			}

			app.models.gasStation.findOrCreate({
				companyName: s.razaoSocial
			}, {
				companyName: s.razaoSocial,
				flag: notHiphen(s.bandeira),
				geolocation: stationProcessed.geolocation,
				distributor: notHiphen(s.distribuidora),
				invoiceOk: s.invoiceOk,
				address: s.endereco,
				neighborhood: s.bairro,
				cityId: dbCity.id,
				stateId: dbCity.stateId
			}, cb)
		}, function(err) {
			if (err) callback('error processing gas stations', err)

			app.models.gasStation.find({
				fields: {
					id: true,
					companyName: true
				}
			}, function(err, dbGasStations) {
				if (err) callback('error processing gas stations 2', err)

				putFuelPrices(stations, dbFuelTypes, dbGasStations)
			})

			console.log('finished putStations')
		})
	}

	var putFuelPrices = function(stations, dbFuelTypes, dbGasStations) {
		stations = stations.filter(function(s) {
			return s.invoiceOk
		})

		async.each(stations, function(s, cb) {
			var dataColeta = brDateToDate(s.dataColeta)

			var idxS = stations.indexOf(s)
			if (idxS % 500 === 0) {
				console.log('fuel price ', stations.indexOf(s), '/', stations.length)
			}

			var dbFuelType = dbFuelTypes.filter(function(f) {
				return f.anpId === s.fuelTypeId
			})
			if (!dbFuelType.length) {
				callback('It wasn\'t possible to retrieve the fuel type of gas station ' + s.razaoSocial)
			}
			dbFuelType = dbFuelType[0]

			var dbGasStation = dbGasStations.filter(function(gs) {
				return gs.companyName.toLowerCase() === s.razaoSocial.toLowerCase()
			})
			if (!dbGasStation.length) {
				callback('It wasn\'t possible to retrieve the gas station of fuel price ' + s.razaoSocial)
			}
			dbGasStation = dbGasStation[0]

			app.models.fuelPrice.findOrCreate({
				and: [{
					date: dataColeta
				}, {
					fuelTypeId: dbFuelType.id
				}]
			}, {
				sale: numberValue(s.precoVenda),
				purchase: numberValue(s.precoCompra),
				supplierWhiteFlag: notHiphen(s.fornecedorBBranca),
				purchaseMode: notHiphen(s.modalidadecompra),
				date: dataColeta,
				unit: notHiphen(s.unit),
				fuelTypeId: dbFuelType.id,
				gasStationId: dbGasStation.id
			}, cb)
		}, function(err) {
			if (err) callback('error processing fuel prices', err)

			callback('load to database success')
		})
		console.log('finished putFuelPrices')
	}

	var notHiphen = function(word) {
		return word === '-' ? null : word
	}

	var numberValue = function(word) {
		var n = notHiphen(word.replace(',', '.'))
		return isNaN(n) ? null : Number(n)
	}

	var brDateToDate = function(dt) {
		dt = dt.split('/')
		for (var i = 0; i < dt.length; i++) {
			dt[i] = Number(dt[i])
		}
		return new Date(dt[2], (dt[1] - 1), dt[0])
	}

	putFuelTypes(module.entities.fuelTypes)
}

module.getCityState = function(cityId, states) {
	var state = states.filter(function(st) {
		return st.cities.some(function(c) {
			return c.id = cityId
		})
	})

	if (state.length) {
		return state[0]
	} else {
		return null
	}
}
