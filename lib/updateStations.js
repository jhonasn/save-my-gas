/*
 * Return all State, City and Neighborhoods on the anp system
 */
var cheerio = require('cheerio')
var path = require('path')
var fs = require('fs')
var entitiesPath = path.join(__dirname, '/tempData')
var req = require(path.join(__dirname, 'request.js'))
var strOp = require(path.join(__dirname, 'stringOperations.js'))

module.entities = {
    states: [],
    cities: [],
    neighborhoods: [],
    fuelTypes: [],
    stations: [],
    sellPrices: []
}

module.stationScratchProgress = {
    total: 0,
    completed: 0,
}

module.exports.anpUpdate = function(updateRegions, cb) {
	//make sure that create storage folder
	module.readStationsFiles()

    if(updateRegions) {
        module.updateRegions(cb)
    } else {
        //get from db, for now this is fs json
	if(module.readStationsFiles()) {
            module.updateAllStations(cb)
        } else {
            module.updateRegions(cb)//get regions from anb
        }
    }
}

module.exports.test = function (cb) {
    module.readStationsFiles()

    var city = module.entities.cities.filter(function(c) { return c.name.toLowerCase().indexOf('campo largo') > -1 })[0]

    module.getCaptcha(city, new Date,
        function(err, values) {
            if(err) console.log(err)

            module.entities.fuelTypes.forEach(function(f) {
                module.getStationsByCity(city, f, values, function (err, res) {
                    cb(err, res)
                })
            })
        }
    )
}

module.exports.anpUpdated = function (cb) {
    if(!module.readStationsFiles()) {
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

    var lastUpdatedDate = module.entities.stations.reduce(reduceByDate).dataColeta
    lastUpdatedDate = strOp.dateStringToDate(lastUpdatedDate)

    //verify just the most popular fuel: gas
    var fuelType = module.entities.fuelTypes.filter(function(f) { return f.name.toLowerCase().indexOf('gasolina') > -1 })[0]

    //verify by great cities
    var greatCities = module.entities.cities.filter(function(c) { return c.name.toLowerCase().indexOf('sao paulo') > -1 })

    greatCities.push(module.entities.cities.filter(function(c) { return c.name.toLowerCase().indexOf('curitiba') > -1 })[0])

    greatCities.push(module.entities.cities.filter(function(c) { return c.name.toLowerCase().indexOf('brasilia') > -1 })[0])

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

        fs.writeFileSync(path.resolve(entitiesPath, 'fuelTypes.json'), JSON.stringify(module.entities.fuelTypes))
        fs.writeFileSync(path.resolve(entitiesPath, 'states.json'), JSON.stringify(module.entities.states))
        fs.writeFileSync(path.resolve(entitiesPath, 'cities.json'), JSON.stringify(module.entities.cities))

        module.updateAllStations(cb)
    })
}

module.updateAllStations = function(cb, err) {
    var async = require('async')
    var stationsFunctions = []

	if(err) cb(err)

    module.getCaptcha(module.entities.cities[0], new Date(), function(err, res) {
        //create heap of functions that will get stations info
    	module.entities.cities.forEach(function(city) {
    	    module.entities.fuelTypes.forEach(function(fuelType) {
    	        stationsFunctions.push(async.apply(module.getStationsByCity, city, fuelType, res))
    	    })
    	})

    	module.stationScratchProgress.total = stationsFunctions.length

    	async.parallelLimit(stationsFunctions, 5, function (error, response) {
    		console.log('FINISH GET STATIONS!')

            fs.writeFileSync(path.resolve(entitiesPath, 'sellPrices.json'), JSON.stringify(module.entities.sellPrices))
            fs.writeFileSync(path.resolve(entitiesPath, 'stations.json'), JSON.stringify(module.entities.stations))

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
                module.entities.states.push(strOp.strToAnpEntity($(el).val()))
            })
            $('select[name=selCombustivel]').find('option').each(function(i, el) {
                module.entities.fuelTypes.push(strOp.strToAnpEntity($(el).val()))
            })

            console.log('completed get states')

            cb()
        }
    )
}

module.getCities = function(cb) {
    //get cities
    req.post(
        'http://www.anp.gov.br/preco/prc/Resumo_Por_Municipio_Index.asp', {
            cod_Semana: '832',
            txtMunicipio: '',
        },
        function(err, res) {
            if (err) cb(err)

            var $ = cheerio.load(res)

            $('select[name=selMunicipio]').find('option').each(function(i, el) {
                module.entities.cities.push(strOp.strToAnpEntity($(el).val()))
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
				module.entities.neighborhoods.push($(el).val().replace(/\@/g, ' '))
			})

            console.log('completed get neighborhoods')

			cb(module.entities.neighborhoods)
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

        module.entities.stations = module.entities.stations.concat(stationsFN.concat(stationsNFN))
        if(sellPrice.hasOwnProperty('media')) {
                module.entities.sellPrices.push(sellPrice)
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

module.readStationsFiles = function() {
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

module.getArrayDifference = function(from, to, prop) {
	return to.filter(function(oto){
		return !from.some(function(of) {
			if(prop) return of[prop] == oto[prop]
			else return of == oto
		})
	})
}

module.exports.postProcessStations = function(cb) {
	if(!module.readStationsFiles()) {
		//error on read files
		cb('the files could not be readed, likely they or your folder do not exists')
		return
	}

	//read ok, then process
	var isEquals = function (a,b) {
		return a.razaoSocial == b.razaoSocial &&
	    a.bairro == b.bairro &&
	    a.endereco == b.endereco &&
	    a.cityId == b.cityId
	}

	var formatStationObj = function (station) {
		var fuelType = module.entities.fuelTypes.filter(function(f) { return f.id == station.fuelTypeId })[0]
		var fuelTypeName = strOp.toPropName(fuelType.name)

        station.precoVenda = station.precoVenda ? parseFloat(station.precoVenda.replace(',','.')) : null
        station.precoCompra = station.precoCompra ? parseFloat(station.precoCompra.replace(',','.')) : null

        station[fuelTypeName] = {}
        station[fuelTypeName].precoVenda = station.precoVenda != NaN ? station.precoVenda : null
        station[fuelTypeName].precoCompra = station.precoCompra != NaN ? station.precoCompra : null
		station[fuelTypeName].modalidadecompra = station.modalidadecompra
		station[fuelTypeName].fornecedorBBranca = station.fornecedorBBranca
		station[fuelTypeName].fuelTypeId = parseInt(fuelType.id)

		delete station.fuelTypeId
		delete station.precoVenda
		delete station.precoCompra
		delete station.modalidadecompra
		delete station.fornecedorBBranca

        station[fuelTypeName].unit = station.unit
        delete station.unit

        if(station.dataColeta) {
            station[fuelTypeName].dataColeta = strOp.dateStringToDate(station.dataColeta)
            delete station.dataColeta
        }
        if(station.dataRecusa) {
            station[fuelTypeName].dataRecusa = strOp.dateStringToDate(station.dataRecusa)
            delete station.dataRecusa
        }

        station.cityId = parseInt(station.cityId)
	}

	var joinEntities = function (a,b) {
		var resolveConflicted = function(a, b, i) {
			if(a[i] && b[i] && a[i] != b[i]) {

					if(!b.hasOwnProperty('conflicted')) {
						b.conflicted = {}
					}
					if(!b.conflicted.hasOwnProperty(i)) {
						b.conflicted[i] = [a[i], b[i]]
					} else {
						var hasAValue = b.conflicted[i].some(function(o) { return o == a[i] })
						var hasBValue = b.conflicted[i].some(function(o) { return o == b[i] })
						if(!hasAValue) {
							b.conflicted[i].push(a[i])
						}
						if(!hasBValue) {
							b.conflicted[i].push(b[i])
						}
					}
				}
		}


		for(var i in a) {
			if(!b.hasOwnProperty(i)) {
				b[i] = a[i]
			}
			resolveConflicted(a, b, i)
		}
		for(var i in b) {
			if(!a.hasOwnProperty(i)) {
				a[i] = b[i]
			}
			resolveConflicted(a, b, i)
		}

		return b
	}

	var processed = 0,
	total = module.entities.stations.length

    var anotherProcessed = function() {
        processed++
        console.log('process: {0} of {1} - {2}%'
                        .replace('{0}', processed)
                        .replace('{1}', total)
                        .replace('{2}', ((processed*100)/total).toFixed(2))
        )
    }

	var reduceStations = function(filtered, next) {
		if(!Array.isArray(filtered)) {
            anotherProcessed()
			return isEquals(filtered, next) ? [joinEntities(filtered,next)] : [filtered, next]
		} else {
			var equals = filtered.filter(function(obj) {
				return isEquals(obj, next)
			})
			//joinEntities equals into next
			equals.forEach(function(obj) {
				if(!next.invoiceOk || !obj.invoiceOk) {
					next.invoiceOk = false
					obj.invoiceOk = false
				}
				joinEntities(next, obj)
			})
			var notEquals = filtered.filter(function(obj) {
				return !isEquals(obj, next)
			})
			notEquals.push(next)

			anotherProcessed()

			return notEquals
		}
	}

    //remove stations without invoice
    module.entities.stations = module.entities.stations.reduce(function(all, next) {
        if(Array.isArray(all)) {
            if(next.invoiceOk) {
                all.push(next)
            }
            return all
        } else {
            if(all.invoiceOk && next.invoiceOk) {
                return [all, next]
            } else if(all.invoiceOk) {
                return [all]
            } else if (next.invoiceOk) {
                return [next]
            } else {
                return []
            }
        }
    })
    total = module.entities.stations.length

	//split by city for performance
	module.entities.cities.forEach(function(city) {
		city.stations = module.entities.stations.filter(function(s) { return s.cityId == city.id })
		if(city.stations.length > 0) {
			city.stations.forEach(function(s) {
                formatStationObj(s)
                var sidx = module.entities.stations.indexOf(s)
                module.entities.stations.splice(sidx, 1)
            })
			city.stations = city.stations.reduce(reduceStations)
		}
		console.log('finished city: ', city.name, ' stations: ', city.stations.length)
	})
	//rejoin stations
	var filteredStations = []
	module.entities.cities.forEach(function(city) {
		filteredStations = filteredStations.concat(city.stations)
	})

	fs.writeFileSync(path.join(entitiesPath, 'ppStations.json'), JSON.stringify(filteredStations))
	console.log('stations processed and saved on ppStations.json')

    console.log('stations not processed: ', module.entities.stations)

    var conflictedProps = filteredStations.filter(function(o) {
        return o.hasOwnProperty('conflicted')
    }).length

    console.info('stations conflicted: ', conflictedProps)

	//in another method put geolocation in each stations by the address
	cb(null, 'Post Process Finished!')
}
