/*
 * Return all State, City and Neighborhoods on the anp system
 */
var cheerio = require('cheerio')
var path = require('path')
var fs = require('fs')
var req = require(path.join(rootPath, 'lib', 'request.js'))
var strOp = require(path.join(rootPath, 'lib', 'stringOperations.js'))
var anpEntities = require(path.join(rootPath, 'lib', 'anpStations', 'entities.js'))

module.stationScratchProgress = {
	total: 0,
	completed: 0,
}

module.exports.anpUpdate = function(updateRegions, cb) {
	//make sure that create storage folder
	anpEntities.readStationsFiles()
	anpEntities.deleteOldFiles()

	if(updateRegions) {
		module.updateRegions(cb)
	} else {
		//get from db, for now this is fs json
		if(anpEntities.readStationsFiles()) {
			module.updateAllStations(cb)
		} else {
			module.updateRegions(cb)//get regions from anb
		}
	}
}

module.exports.test = function (cb) {
	anpEntities.readStationsFiles()

	var city = anpEntities.entities.cities.filter(function(c) { return c.name.toLowerCase().indexOf('campo largo') > -1 })[0]

	module.getCaptcha(city, new Date(),
			  function(err, values) {
				  if(err) console.log(err)

					  anpEntities.entities.fuelTypes.forEach(function(f) {
						  module.getStationsByCity(city, f, values, function (err, res) {
							  cb(err, res)
						  })
					  })
			  }
			 )
}

module.exports.anpUpdated = function (cb) {
	if(!anpEntities.readStationsFiles()) {
		module.updateRegions(cb)
	}

	var async = require('async')

	var reduceByDate = function(a, b) {
		if(strOp.thisIsDate(a.dataColeta) && strOp.thisIsDate(b.dataColeta)) {
			var aDate = strOp.dateStringToDate(a.dataColeta)
			var bDate = strOp.dateStringToDate(b.dataColeta)

			if(aDate.valueOf() > bDate.valueOf()) {
				return a
			} else {
				return b
			}
		} else {
			return a
		}
	}

	var lastUpdatedDate = anpEntities.entities.stations.reduce(reduceByDate).dataColeta
	lastUpdatedDate = strOp.dateStringToDate(lastUpdatedDate)

	//verify just the most popular fuel: gas
	var fuelType = anpEntities.entities.fuelTypes.filter(function(f) { return f.name.toLowerCase().indexOf('gasolina') > -1 })[0]

	//verify by great cities
	var greatCities = anpEntities.entities.cities.filter(function(c) { return c.name.toLowerCase().indexOf('sao paulo') > -1 })

	greatCities.push(anpEntities.entities.cities.filter(function(c) { return c.name.toLowerCase().indexOf('curitiba') > -1 })[0])

	greatCities.push(anpEntities.entities.cities.filter(function(c) { return c.name.toLowerCase().indexOf('brasilia') > -1 })[0])

	module.stationScratchProgress.total = greatCities.length

	module.getCaptcha(greatCities[0], new Date(), function(err, values) {
		var citiesFunc = []

		greatCities.forEach(function(c) {
			citiesFunc.push(async.apply(module.getStationsByCity, c, fuelType, values))
		})

		async.parallel(citiesFunc, function(err, res) {
			if(err) cb(err, res)
				console.log('finish verify')

			var stationsUpdated = []

			//filter last date
			res.forEach(function(o) {
				stationsUpdated.push(o.stations.reduce(reduceByDate))
			})

			var updatedStation = stationsUpdated.reduce(reduceByDate)
			var anpLastUpdated = strOp.dateStringToDate(updatedStation.dataColeta)

			var isAnpUpdated = anpLastUpdated.valueOf() > lastUpdatedDate.valueOf()

			cb(err, isAnpUpdated)
		})
	})

}

module.updateRegions = function(cb) {
	var async = require('async')
	async.parallel([
		module.getStates,
		module.getCities
	], function(err, res) {
		if(err) cb(err)

			anpEntities.save('fuelTypes', anpEntities.entities.fuelTypes)
			anpEntities.save('states', anpEntities.entities.states)
			anpEntities.save('cities', anpEntities.entities.cities)

			module.updateAllStations(cb)
	})
}

module.updateAllStations = function(cb, err) {
	var async = require('async')
	var stationsFunctions = []

	if(err) cb(err)

		module.getCaptcha(anpEntities.entities.cities[0], new Date(), function(err, res) {
			//create heap of functions that will get stations info
			anpEntities.entities.cities.forEach(function(city) {
				anpEntities.entities.fuelTypes.forEach(function(fuelType) {
					stationsFunctions.push(async.apply(module.getStationsByCity, city, fuelType, res))
				})
			})

			module.stationScratchProgress.total = stationsFunctions.length

			async.parallelLimit(stationsFunctions, 5, function (error, response) {
				console.log('FINISH GET STATIONS!')

				anpEntities.save('sellPrices', anpEntities.entities.sellPrices)
				anpEntities.save('stations', anpEntities.entities.stations)

				cb(error, response) //array of err and res
			})
		})
}

module.getStates = function(cb) {
	//get states and fuel types
	req.get(
		'http://www.anp.gov.br/preco/prc/Resumo_Por_Estado_Index.asp',
		function(err, res) {
			if (err) cb(err)

				var $ = cheerio.load(res)

				$('select[name=selEstado]').find('option').each(function(i, el) {
					anpEntities.entities.states.push(strOp.strToAnpEntity($(el).val()))
				})
				$('select[name=selCombustivel]').find('option').each(function(i, el) {
					anpEntities.entities.fuelTypes.push(strOp.strToAnpEntity($(el).val()))
				})

				var captcha = $('#frmAberto').attr('action').match(/'.*'/g)[0].replace(/'/g, '')

				var getCitiesFromStateFunctions = []
				anpEntities.entities.states.forEach(function(state) {
					getCitiesFromStateFunctions.push(async.apply(module.getCitiesFromState, strOp.anpEntityToStr(state), function(err, cities) {
						if(err){ cb(err) }
						state.cities = cities
					}))
				})

				async.parallelLimit(getCitiesFromStateFunctions, 5, function(err, res) {
					console.log('completed get states')

					cb()
				})
		}
	)
}

module.getCitiesFromState = function (stateString, cb) {
	req.post(
		'http://www.anp.gov.br/preco/prc/Resumo_Por_Estado_Municipio.asp', {
			cod_Semana: strOp.getWeekCode(new Date()).toString(),
			tipo: 1,
			selEstado: stateString,
			selCombustivel: '487*Gasolina',
			txtValor: captcha
		},
		function(err, res) {
			if(err) { cb(err) }

			var cities = []
			$('table').first().find('tr').each(function(i, tr) {
				var cityString = $(tr).find('td').first().find('a').attr('href').match(/'.*'/g)[0].replace(/'/g, '')
				cities.push(strOp.strToAnpEntity(cityString))
			})

			cb(null, cities)
		})
}

module.getCities = function(cb) {
	//get cities
	req.post(
		'http://www.anp.gov.br/preco/prc/Resumo_Por_Municipio_Index.asp', {
			cod_Semana: strOp.getWeekCode(new Date()).toString(),
			txtMunicipio: '',
		},
		function(err, res) {
			if (err) cb(err)

				var $ = cheerio.load(res)

				$('select[name=selMunicipio]').find('option').each(function(i, el) {
					anpEntities.entities.cities.push(strOp.strToAnpEntity($(el).val()))
				})

				console.log('completed get cities')

				cb()
		}
	)
}

module.getNeighborhoods = function(cb) {
	req.post(
		'http://www.anp.gov.br/preco/prc/Resumo_Ultimas_Coletas_Index.asp', {
			cod_Semana: 832,
			selMunicipio: '9668*SAO@PAULO',
			selCombustivel: '487*Gasolina'
		},
		function (err, res) {
			if(err) cb(err)

				var $ = cheerio.load(res)

				$('select[name=BAIRRO]').find('option').each(function(i, el) {
					//there's no id into neighborhoods
					//the 'select all' option value is 0
					anpEntities.entities.neighborhoods.push($(el).val().replace(/\@/g, ' '))
				})

				console.log('completed get neighborhoods')

				cb(anpEntities.entities.neighborhoods)
		}
	)
}

module.getCaptcha = function(city, diaSemana, cb) {
	//get captcha -> get prices
	var scratchCaptcha = function(err, res) {
		if (err) cb(err)

			var $ = cheerio.load(res)

			var values = {
				captcha: $('#frmCaptcha').attr('action').match(/'.*'/g)[0].replace(/'/g, ''),
				tipo: $('[name=Tipo]').val(),
				selSemana: $('[name=selSemana]').val(),
				codSemana: $('[name=cod_Semana]').val()
			}

			console.log('completed get captcha: ' + values.captcha)

			cb(null, values)
	}

	req.post(
		'http://www.anp.gov.br/preco/prc/Resumo_Por_Municipio_Index.asp', {
			cod_Semana: strOp.getWeekCode(diaSemana),
			selMunicipio: strOp.anpEntityToStr(city),
		},
		scratchCaptcha
	)
}

module.getStationsByCity = function(city, fuelType, value, cb) {


	var current = 'city: {0}, fuelType: {1}'.replace('{0}', city.name).replace('{1}', fuelType.name)
	console.log('starting to get ' + current)


	var scratchStations = function(err, res) {
		if (err) cb(err)

			var $ = cheerio.load(res)

			var tableToArray = function(trs) {
				var props = []

				//row 0 is caption
				$(trs[1]).find('th').each(function(i, el) {
					props.push(strOp.toPropName($(el).text()))
				})

				var stations = []
				$(trs).each(function(i, el) {
					if ($(el).find('th').length > 0) return //skip header lines

						var station = {}
						var tds = $(el).find('td')
						props.forEach(function(p, i) {
							station[p] = strOp.clearHtmlText($(tds[i]).text())
						})
						stations.push(station)
				})

				return stations
			}
			var tableKeyValueToArray = function(trs) {
				var value = {}
				$(trs).each(function(i, el) {
					var tds = $(el).find('td')
					if (tds.length < 2) return

						value[strOp.toPropName($(tds[0]).text())] = strOp.clearHtmlText($(tds[1]).text())
				})
				return value
			}

			var trsFN = $('#postos_nota_fiscal').find('table').first().find('tr')
			var trsNFN = $('#postos_sem_nota_fiscal').find('table').first().find('tr')
			var trsSellPrice = $($('#postos_nota_fiscal').find('table')[1]).find('tr')
			var unitEls = $('.tabela3').find('h3')
			if(unitEls.length >= 2) {
				var unit = $(unitEls[1]).text().split('-')[1].trim().split(' ')[1]
			}
			var stationsFN = tableToArray(trsFN).map(function(obj) {
				obj.invoiceOk = true
				obj.cityId = city.id
				obj.fuelTypeId = fuelType.id
				obj.unit = unit
				return obj
			})
			var stationsNFN = tableToArray(trsNFN).map(function(obj) {
				obj.invoiceOk = false
				obj.cityId = city.id
				obj.fuelTypeId = fuelType.id
				obj.unit = unit
				return obj
			})
			var sellPrice = tableKeyValueToArray(trsSellPrice)
			sellPrice.cityId = city.id
			sellPrice.fuelTypeId = fuelType.id
			sellPrice.unit = unit

			anpEntities.entities.stations = anpEntities.entities.stations.concat(stationsFN.concat(stationsNFN))
			if(sellPrice.hasOwnProperty('media')) {
				anpEntities.entities.sellPrices.push(sellPrice)
			}

			console.log('completed stations from {0}, fuel {1}'
				    .replace('{0}', city.name)
				    .replace('{1}', fuelType.name)
				   )

				   module.stationScratchProgress.completed++

					   console.log('{0} of {1} [ {2} % ]'
						       .replace('{0}', module.stationScratchProgress.completed)
						       .replace('{1}',module.stationScratchProgress.total)
						       .replace('{2}', ((module.stationScratchProgress.completed*100)/module.stationScratchProgress.total).toFixed(2)))

						       cb(err, {
							       stations: stationsFN.concat(stationsNFN),
							       sellPrice: sellPrice
						       })
	}

	//init
	//get stations prices
	req.post(
		'http://www.anp.gov.br/preco/prc/Resumo_Por_Municipio_Posto.asp',
		{
			Tipo: value.tipo, //i don't know what is it
			selSemana: value.selSemana, //not required/verified
			cod_Semana: value.codSemana,
			selCombustivel: strOp.anpEntityToStr(fuelType),
			selMunicipio: strOp.anpEntityToStr(city),
			txtValor: value.captcha, //catcha
		},
		scratchStations
	)
}

module.getArrayDifference = function(from, to, prop) {
	return to.filter(function(oto){
		return !from.some(function(of) {
			if(prop) return of[prop] == oto[prop]
				else return of == oto
		})
	})
}
