//this file will upload data to database
var path = require('path')
var app = require('../../../../web-api/server/server')
	// var entities = require(path.resolve(rootPath, 'lib', 'anp-stations', 'entities'))

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

module.exports.load = function(entitiesPath, cb) {
	var states = require(path.resolve(entitiesPath, 'states'))
	var cities = require(path.resolve(entitiesPath, 'cities'))
	var fuelTypes = require(path.resolve(entitiesPath, 'fuelTypes'))
		// var stations = require(path.resolve(entitiesPath, 'stations'))
		// var stationsProcessed = require(path.resolve(entitiesPath, 'ppStations'))
	var stations = require(path.resolve(entitiesPath, 'ppStations'))


	// ##########
	// # mapping
	// ##########
	var statesWithCities = states
	states = states.map(function(s) {
		return {
			name: s.name,
			fu: s.id
		}
	})
	console.log('mapeado estados')

	cities = cities.map(function(c) {
		var stateId = module.getCityState(c.id, statesWithCities)
		stateId = stateId && stateId.id
		return {
			name: c.name,
			anpId: c.id,
			stateId: stateId //fu
		}
	})
	console.log('mapeado cidades')

	//get neighborhoods from gas stations
	//remove duplicated
	var neighborhoods = stations.reduce(function(prev, curr) {
		if (!Array.isArray(prev)) {
			if (prev.bairro.toLowerCase() === curr.bairro.toLowerCase()) {
				return [prev]
			} else {
				return [prev, curr]
			}
		} else {
			var existsNeighborhood = prev.some(function(p) {
				return p.bairro.toLowerCase() === curr.bairro.toLowerCase()
			})

			if (!existsNeighborhood) {
				prev.push(curr)
			}
			return prev
		}
	})

	//pass stations with neighborhood info to mapping
	neighborhoods.map(function(station) {
		var cityState = module.getCityState(station.cityId, statesWithCities)
		var stateId = cityState && cityState.id
		return {
			name: station.bairro,
			cityId: station.cityId, //anpId
			stateId: stateId //fu
		}
	})
	console.log('mapeado bairros = ' + neighborhoods.length)

	//get address from gas stations
	//remove duplicated
	var addresses = stations.reduce(function(prev, curr) {
		if (!Array.isArray(prev)) {
			if (prev.endereco.toLowerCase() === curr.endereco.toLowerCase()) {
				return [prev]
			} else {
				return [prev, curr]
			}
		} else {
			var existsAddress = prev.some(function(p) {
				return p.endereco.toLowerCase() === curr.endereco.toLowerCase()
			})

			if (!existsAddress) {
				prev.push(curr)
			}
			return prev
		}
	})

	//pass stations with address info to mapping
	addresses.map(function(station) {
		var cityState = module.getCityState(station.cityId, statesWithCities)
		var stateId = cityState && cityState.id
		return {
			address: station.endereco,
			neighborhoodId: station.bairro,
			stateId: stateId, //fu
			cityId: station.cityId //anpId
		}
	})
	console.log('mapeado endereços = ' + addresses.length)

	fuelTypes.map(function(f) {
		return {
			name: f.name,
			anpId: f.id
		}
	})
	console.log('mapeado combustiveis = ' + fuelTypes.length)

	//station
	// "razaoSocial": String,
	// "endereco": String,
	// "bairro": String,
	// "bandeira": String,
	// "precoVenda": String,
	// "precoCompra": String,
	// "modalidadecompra": String,
	// "fornecedorBBranca": String,
	// "dataColeta": Date//json string
	// "invoiceOk": Bool,
	// "cityId": String,
	// "fuelTypeId": Integer,
	// "unit": String,

	var fuelPrices = []
	statition.forEach(function(s) {
		fuelTypes.forEach(function(f) {
			if (s[f.name]) {
				fuelPrices.push(s[f.name])
			}
		})
	})
	console.log('mapeado preços de combustiveis = ', fuelPrices.length)

	stations.map(function(s) {
		var cityState = module.getCityState(s.cityId, statesWithCities)
		var stateId = cityState && cityState.id
		return {
			companyName: s.razaoSocial,
			geolocation: s.geolocation,
			distributor: s.distribuidora,
			invoiceOk: s.invoiceOk,
			addressId: s.endereco,
			neighborhoodId: s.bairro,
			cityId: s.cityId,
			stateId: stateId
		}
	})
	console.log('mapeado postos = ', stations.length)

	// entities.entities.sellPrices.map(function(s) {
	// 	return {
	// 		sale: {
	// 	      type: number
	// 	    },
	// 	    purchase: {
	// 	      type: number
	// 	    },
	// 	    supplierWhiteFlag: {
	// 	      type: boolean
	// 	    },
	// 	    date: {
	// 	      type: date
	// 	    },
	// 	    anpId: {
	// 	      type: string
	// 	    },
	// 	    fuelTypeId: {
	// 	      type: string
	// 	    },
	// 	    gasStationId: {
	// 	      type: string
	// 	    }
	// 	}
	// }).forEach(function(s) {
	// 	app.models.fuelPrice.findOrCreate({
	// 		name: s.name
	// 	}, s)
	// })

	//######################
	//# Load to database
	//######################
	app.datasources.mongodb.on('connected', function() {
		states.forEach(function(s) {
			app.models.state.findOrCreate({
				fu: s.fu
			}, s)
		})

		cities.forEach(function(c) {
			app.models.state.findOne({
				where: {
					fu: c.stateId
				}
			}, function(err, state) {
				c.stateId = !err ? state.id : c.stateId
				app.models.city.findOrCreate({
					anpId: c.anpId
				}, c)
			})
		})

		neighborhoods.forEach(function(n) {
			app.models.city.findOne({
				where: {
					anpId: n.cityId
				},
				includes: 'state'
			}, function(err, city) {
				if (!err && city.state) {
					n.cityId = city.id
					n.stateId = city.state.id
				}
				app.models.neighborhood.findOrCreate({
					name: n.name
				}, n)
			})
		})

		addresses.forEach(function(a) {
			app.models.neighborhood.findOne({
				where: {
					name: a.neighborhoodId
				},
				includes: ['city', 'state']
			}, function(err, neighborhood) {
				if (!err && neighborhood.city && neighborhood.state) {
					a.neighborhoodId = neighborhood.id
					a.cityId = city.id
					a.stateId = city.state.id
				}
				app.models.address.findOrCreate({
					address: a.address
				}, a)
			})
		})

		fuelTypes.forEach(function(f) {
			app.models.fuelType.findOrCreate({
				anpId: f.anpId
			}, f)
		})

		stations.forEach(function(s) {
			app.models.address.findOne({
				where: {
					address: s.address
				},
				include: ['city', 'state', 'neighborhood']
			}, function(err, address) {
				if (
					address &&
					address.neighborhood &&
					address.city &&
					address.state
				) {
					s.addressId = address.id
					s.neighborhoodId = address.neighborhood.id
					s.cityId = address.city.id
					s.stateId = address.state.id
				}
				app.models.gasStation.findOrCreate({
					companyName: s.razaoSocial
				}, s)
			})
		})

		cb(null, 'ok!')
	})
}
